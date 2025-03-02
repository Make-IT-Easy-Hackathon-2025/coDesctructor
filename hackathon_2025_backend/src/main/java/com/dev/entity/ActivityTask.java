package com.dev.entity;

import com.dev.enums.Day;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class ActivityTask {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Day day;
    private boolean isCompleted;
    private LocalDateTime whenCompleted;
    private Long activityId;

    public ActivityTask() {
    }

    public ActivityTask(Long id, String name, LocalDateTime startTime, LocalDateTime endTime, Day day, Long activityId, boolean isCompleted, LocalDateTime whenCompleted) {
        this.id = id;
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
        this.activityId = activityId;
        this.isCompleted = isCompleted;
        this.whenCompleted = whenCompleted;
    }

    public ActivityTask(String name, LocalDateTime startTime, LocalDateTime endTime, Day day, Long activityId, boolean isCompleted, LocalDateTime whenCompleted) {
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

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
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

    public void setCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    public LocalDateTime getWhenCompleted() {
        return whenCompleted;
    }

    public void setWhenCompleted(LocalDateTime whenCompleted) {
        this.whenCompleted = whenCompleted;
    }
}
