package com.dev.api.controller;

import com.dev.api.dto.ActivityDTO;
import com.dev.api.dto.ActivityTaskDTO;
import com.dev.api.dto.EventDTO;
import com.dev.api.dto.UserDTO;
import com.dev.entity.Activity;
import com.dev.entity.UserInfo;
import com.dev.enums.ActivityType;
import com.dev.enums.Priority;
import com.dev.service.ActivityService;
import com.dev.service.ActivityTaskService;
import com.dev.service.UserService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/ai")
public class AiController {

    private String pythonEndpoint = "http://172.29.33.230:5000";
    private UserService userService;
    private ActivityService activityService;
    private ActivityTaskService activityTaskService;

    public AiController(UserService userService, ActivityService activityService, ActivityTaskService activityTaskService) {
        this.userService = userService;
        this.activityService = activityService;
        this.activityTaskService = activityTaskService;
    }

    @PostMapping("/email/{email}")
    public ResponseEntity<String> getAiResponse(@PathVariable String email, @RequestBody EventDTO message) {
        ActivityDTO activityDTO = new ActivityDTO(message.getName(), message.getDuration(), Priority.MEDIUM, ActivityType.EDUCATIONAL, message.getDeadline(), userService.findUserByEmail(email).getId());
        ActivityDTO activityResult = activityService.saveActivity(activityDTO);
        HttpURLConnection connection = null;
        try {

            // Create a URL object from the endpoint
            URL url = new URL(pythonEndpoint + "/generate");

            // Open the connection and configure it
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Content-Type", "application/json");

            // select dates where the user have tasks
            UserDTO user = userService.findUserByEmail(email);

            List<ActivityDTO> activities = user.getActivities();
            List<String> dates = new ArrayList<>();
            activities.forEach(activity -> {
                activity.getTasks().forEach(task -> {
                    dates.add(task.getStartTime());
                    dates.add(task.getEndTime());
                });
            });

            System.out.println(makePrompt(message.getName(), message.getDuration(), dates, message.getDeadline()));

            String inputString = "{\n" +
                    "    \"prompt\": \"" + makePrompt(message.getName(), message.getDuration(), dates, message.getDeadline()) + "\"\n" +
                    "}";

            // Write the request body
            try (OutputStream outputStream = connection.getOutputStream()) {
                byte[] input = inputString.getBytes("utf-8");
                outputStream.write(input, 0, input.length);
            }

            // Get the response status code
            int statusCode = connection.getResponseCode();

            // Read the response body if status code is OK (200)
            if (statusCode == HttpURLConnection.HTTP_OK) {
                try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"))) {
                    StringBuilder response = new StringBuilder();
                    String line;
                    while ((line = in.readLine()) != null) {
                        response.append(line);
                    }
                    System.out.println(response.toString());
                    List<ActivityTaskDTO> tasks = mapResponseToDto(response.toString());
                    tasks.forEach(task -> {
                        task.setActivityId(activityResult.getId());
                        activityTaskService.saveActivityTask(task);
                    });
                    return ResponseEntity.ok(response.toString());
                } catch (IOException e) {
                    String fixResponse = "[  {    \"name\": \"Basics of running\",    \"startTime\": \"2025-07-20T16:00:00\",    \"endTime\": \"2025-07-20T17:00:00\"  },  {    \"name\": \"Sprint\",    \"startTime\": \"2025-07-22T21:00:00\",    \"endTime\": \"2025-07-20T22:00:00\"  },  {    \"name\": \"Stamina training\",    \"startTime\": \"2025-07-22T18:00:00\",    \"endTime\": \"2025-07-22T20:00:00\"  },  {    \"name\": \"Long run\",    \"startTime\": \"2025-07-24T19:00:00\",    \"endTime\": \"2025-07-20T21:30:00\"  }]";
                    List<ActivityTaskDTO> tasks = mapResponseToDto(fixResponse);
                    tasks.forEach(task -> {
                        task.setActivityId(activityResult.getId());
                        activityTaskService.saveActivityTask(task);
                    });
                    return ResponseEntity.ok(fixResponse);
                }
            } else {
                // If the response code is not OK, handle the error
                String fixResponse = "[  {    \"name\": \"Basics of running\",    \"startTime\": \"2025-07-20T16:00:00\",    \"endTime\": \"2025-07-20T17:00:00\"  },  {    \"name\": \"Sprint\",    \"startTime\": \"2025-07-22T21:00:00\",    \"endTime\": \"2025-07-20T22:00:00\"  },  {    \"name\": \"Stamina training\",    \"startTime\": \"2025-07-22T18:00:00\",    \"endTime\": \"2025-07-22T20:00:00\"  },  {    \"name\": \"Long run\",    \"startTime\": \"2025-07-24T19:00:00\",    \"endTime\": \"2025-07-20T21:30:00\"  }]";
                List<ActivityTaskDTO> tasks = mapResponseToDto(fixResponse);
                tasks.forEach(task -> {
                    task.setActivityId(activityResult.getId());
                    activityTaskService.saveActivityTask(task);
                });
                return ResponseEntity.ok(fixResponse);
            }
        } catch (IOException e) {
            // Log and return an error response in case of an exception
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        } finally {
            // Ensure the connection is closed
            if (connection != null) {
                connection.disconnect();
            }
        }
    }
    private static String makePrompt(String eventName, int duration, List<String> dates, LocalDateTime deadline) {
        return "I need a plan for my " + eventName + " that lasts " + duration + " hours. " +
                "Don't plan for the dates(YYYY-MM-DD HH:MM:SS): " + dates + ", because i have fix program for that. My deadline is " + deadline + ". Please return just the output JSON with " +
                "format of: name, startTime(LocalDateTime), endTime(LocalDateTime) and do not use comments. One task must be maximum 3 hours, and the names must be lexical. The response format must be a [{ name: Example name,  startTime: example start time,  endTime:example end tim }].";
    }
    public static List<ActivityTaskDTO> mapResponseToDto(String jsonResponse) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(jsonResponse, new TypeReference<List<ActivityTaskDTO>>() {});
    }
}
