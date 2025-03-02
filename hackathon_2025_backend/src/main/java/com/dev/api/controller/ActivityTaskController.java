package com.dev.api.controller;

import com.dev.api.dto.ActivityTaskDTO;
import com.dev.service.ActivityTaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/activity-task")
public class ActivityTaskController {
    private final ActivityTaskService activityTaskService;

    public ActivityTaskController(ActivityTaskService activityTaskService) {
        this.activityTaskService = activityTaskService;
    }

    @GetMapping("/activity/{activityId}")
    public ResponseEntity<List<ActivityTaskDTO>> getActivityTasksByActivityId(@PathVariable Long activityId) {
        return ResponseEntity.ok(activityTaskService.findActivityTasksByActivityId(activityId));
    }
    @PostMapping("/activity/{activityId}")
    public ResponseEntity<ActivityTaskDTO> createActivityTask(@PathVariable Long activityId, @RequestBody ActivityTaskDTO activityTaskDTO) {
        return ResponseEntity.ok(activityTaskService.saveActivityTask(activityTaskDTO));
    }
    @PutMapping("/id/{id}")
    public ResponseEntity<ActivityTaskDTO> updateActivityTask(@PathVariable Long id, @RequestBody ActivityTaskDTO activityTaskDTO) {
        return ResponseEntity.ok(activityTaskService.updateActivityTask(id, activityTaskDTO));
    }
    @DeleteMapping("/id/{id}")
    public ResponseEntity<String> deleteActivityTask(@PathVariable Long id) {
        activityTaskService.deleteActivityTask(id);
        return ResponseEntity.ok("ActivityTask deleted successfully");
    }
    @GetMapping("/activity/{activityId}/completed")
    public ResponseEntity<List<ActivityTaskDTO>> getActivityTasksByActivityIdAndIsCompleted(@PathVariable Long activityId) {
        return ResponseEntity.ok(activityTaskService.findActivityTasksByActivityIdAndIsCompleted(activityId));
    }

    @GetMapping("/activity/user/{userId}")
    public ResponseEntity<List<ActivityTaskDTO>> getActivityTasksByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(activityTaskService.findActivityTasksByUserId(userId));
    }
}
