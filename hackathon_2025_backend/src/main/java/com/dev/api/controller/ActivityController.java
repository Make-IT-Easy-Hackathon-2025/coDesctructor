package com.dev.api.controller;

import com.dev.api.dto.ActivityDTO;
import com.dev.enums.ActivityType;
import com.dev.enums.Priority;
import com.dev.service.ActivityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/activity")
public class ActivityController {
    private final ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<ActivityDTO> getActivityById(@PathVariable Long id) {
        return ResponseEntity.ok(activityService.findActivityById(id));
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ActivityDTO>> getActivitiesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(activityService.findActivitiesByUserId(userId));
    }
    @GetMapping("/priority/{userId}/{priority}")
    public ResponseEntity<List<ActivityDTO>> getActivitiesByPriority(@PathVariable Long userId, @PathVariable Priority priority) {
        return ResponseEntity.ok(activityService.findActivitiesByPriority(userId, priority));
    }
    @GetMapping("/type/{userId}/{activityType}")
    public ResponseEntity<List<ActivityDTO>> getActivitiesByActivityType(@PathVariable Long userId, @PathVariable ActivityType activityType) {
        return ResponseEntity.ok(activityService.findActivitiesByActivityType(userId, activityType));
    }
    @GetMapping("/priority-type/{userId}/{priority}/{activityType}")
    public ResponseEntity<List<ActivityDTO>> getActivitiesByPriorityAndActivityType(@PathVariable Long userId, @PathVariable Priority priority, @PathVariable ActivityType activityType) {
        return ResponseEntity.ok(activityService.findActivitiesByPriorityAndActivityType(userId, priority, activityType));
    }
    @GetMapping("/all")
    public ResponseEntity<List<ActivityDTO>> getAllActivities() {
        return ResponseEntity.ok(activityService.findAllActivities());
    }

    @PostMapping()
    public ResponseEntity<ActivityDTO> saveActivity(@RequestBody ActivityDTO activityDTO) {
        return ResponseEntity.ok(activityService.saveActivity(activityDTO));
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<String> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return ResponseEntity.ok("Activity deleted successfully");
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<ActivityDTO> updateActivity(@PathVariable Long id, @RequestBody ActivityDTO activityDTO) {
        return ResponseEntity.ok(activityService.updateActivity(id, activityDTO));
    }
}
