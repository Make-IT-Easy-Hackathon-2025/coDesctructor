package com.dev.api.dto;

import com.dev.enums.Day;

import java.time.LocalDateTime;

public class ActivityTaskDTO {
    private Long id;
    private String name;
    private String startTime;
    private String endTime;
    private Day day;
    private boolean isCompleted;
    private LocalDateTime whenCompleted;
    private Long activityId;

    public ActivityTaskDTO() {
    }

    public ActivityTaskDTO(Long id, String name, String startTime, String endTime, Day day, Long activityId, boolean isCompleted, LocalDateTime whenCompleted) {
        this.id = id;
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
        this.activityId = activityId;
        this.isCompleted = isCompleted;
        this.whenCompleted = whenCompleted;
    }

    public ActivityTaskDTO(String name, String startTime, String endTime, Day day, Long activityId, boolean isCompleted, LocalDateTime whenCompleted) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
        this.activityId = activityId;
        this.isCompleted = isCompleted;
        this.whenCompleted = whenCompleted;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public Day getDay() {
        return day;
    }

    public void setDay(Day day) {
        this.day = day;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public LocalDateTime getWhenCompleted() {
        return whenCompleted;
    }

    public void setWhenCompleted(LocalDateTime whenCompleted) {
        this.whenCompleted = whenCompleted;
    }

    @Override
    public String toString() {
        return "ActivityTaskDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", day=" + day +
                ", isCompleted=" + isCompleted +
                ", whenCompleted=" + whenCompleted +
                ", activityId=" + activityId +
                '}';
    }
}
