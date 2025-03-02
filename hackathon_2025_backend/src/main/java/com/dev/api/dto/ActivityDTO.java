package com.dev.api.dto;

import com.dev.api.mapper.ActivityMapper;
import com.dev.enums.ActivityType;
import com.dev.enums.Priority;

import java.time.LocalDateTime;
import java.util.List;

public class ActivityDTO {
    private Long id;
    private String name;
    private Integer duration;
    private Priority priority;
    private ActivityType activityType;
    private LocalDateTime deadline;
    private Long userId;
    private List<ActivityTaskDTO> tasks;

    public ActivityDTO() {
    }

    public ActivityDTO(Long id, String  name, Integer duration, Priority priority, ActivityType activityType, LocalDateTime deadline, Long userId) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.priority = priority;
        this.activityType = activityType;
        this.deadline = deadline;
        this.userId = userId;
    }
    public ActivityDTO(Long id, String  name, Integer duration, Priority priority, ActivityType activityType, LocalDateTime deadline, Long userId, List<ActivityTaskDTO> tasks) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.priority = priority;
        this.activityType = activityType;
        this.deadline = deadline;
        this.userId = userId;
        this.tasks = tasks;
    }

    public ActivityDTO(String name, Integer duration, Priority priority, ActivityType activityType, LocalDateTime deadline, Long userId) {
        this.name = name;
        this.duration = duration;
        this.priority = priority;
        this.activityType = activityType;
        this.deadline = deadline;
        this.userId = userId;
    }
    public ActivityDTO(String name, Integer duration, Priority priority, ActivityType activityType, LocalDateTime deadline, Long userId, List<ActivityTaskDTO> tasks) {
        this.name = name;
        this.duration = duration;
        this.priority = priority;
        this.activityType = activityType;
        this.deadline = deadline;
        this.userId = userId;
        this.tasks = tasks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public ActivityType getActivityType() {
        return activityType;
    }

    public void setActivityType(ActivityType activityType) {
        this.activityType = activityType;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<ActivityTaskDTO> getTasks() {
        return tasks;
    }

    public void setTasks(List<ActivityTaskDTO> tasks) {
        this.tasks = tasks;
    }
}
