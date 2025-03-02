package com.dev.service;

import com.dev.api.dto.ActivityDTO;
import com.dev.api.mapper.ActivityMapper;
import com.dev.entity.Activity;
import com.dev.enums.ActivityType;
import com.dev.enums.Priority;
import com.dev.repository.ActivityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;
    private final ActivityMapper activityMapper;

    public ActivityService(ActivityRepository activityRepository, ActivityMapper activityMapper) {
        this.activityRepository = activityRepository;
        this.activityMapper = activityMapper;
    }

    public ActivityDTO findActivityById(Long id) {
        Activity activity = activityRepository.findActivityByIdIs(id);
        return activityMapper.toDto(activity);
    }

    public List<ActivityDTO> findAllActivities() {
        List<Activity> activities = activityRepository.findAll();
        return activityMapper.toDtos(activities);
    }

    public ActivityDTO saveActivity(ActivityDTO activityDTO) {
        Activity savedActivity = activityRepository.save(activityMapper.toEntity(activityDTO));
        return activityMapper.toDto(savedActivity);
    }

    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }

    public ActivityDTO updateActivity(Long id, ActivityDTO activityDTO) {
        Activity activity = activityRepository.findActivityByIdIs(id);
        activity.setName(activityDTO.getName());
        activity.setDuration(activityDTO.getDuration());
        activity.setPriority(activityDTO.getPriority());
        activity.setActivityType(activityDTO.getActivityType());
        activity.setDeadline(activityDTO.getDeadline());
        Activity updatedActivity = activityRepository.save(activity);
        return activityMapper.toDto(updatedActivity);
    }

    public List<ActivityDTO> findActivitiesByUserId(Long userId) {
        List<Activity> activities = activityRepository.findActivitiesByUserId(userId);
        return activityMapper.toDtos(activities);
    }

    public List<ActivityDTO> findActivitiesByPriority(Long userId, Priority priority) {
        List<Activity> activities = activityRepository.findActivitiesByUserIdAndPriority(userId, priority);
        return activityMapper.toDtos(activities);
    }

    public List<ActivityDTO> findActivitiesByActivityType(Long userId, ActivityType activityType) {
        List<Activity> activities = activityRepository.findActivitiesByUserIdAndActivityType(userId, activityType);
        return activityMapper.toDtos(activities);
    }

    public List<ActivityDTO> findActivitiesByPriorityAndActivityType(Long userId, Priority priority, ActivityType activityType) {
        List<Activity> activities = activityRepository.findActivitiesByUserIdAndPriorityAndActivityType(userId, priority, activityType);
        return activityMapper.toDtos(activities);
    }
}
