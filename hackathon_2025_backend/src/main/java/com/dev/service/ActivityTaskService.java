package com.dev.service;

import com.dev.api.dto.ActivityTaskDTO;
import com.dev.api.mapper.ActivityTaskMapper;
import com.dev.entity.ActivityTask;
import com.dev.repository.ActivityTaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityTaskService {
    private final ActivityTaskRepository activityTaskRepository;
    private final ActivityTaskMapper activityTaskMapper;

    public ActivityTaskService(ActivityTaskRepository activityTaskRepository, ActivityTaskMapper activityTaskMapper) {
        this.activityTaskRepository = activityTaskRepository;
        this.activityTaskMapper = activityTaskMapper;
    }

    public List<ActivityTaskDTO> findActivityTasksByActivityId(Long activityId) {
        List<ActivityTask> activityTasks = activityTaskRepository.findActivityTasksByActivityId(activityId);
        return activityTaskMapper.toActivityTaskDTOs(activityTasks);
    }

    public ActivityTaskDTO saveActivityTask(ActivityTaskDTO activityTaskDTO) {
        ActivityTask activityTask = activityTaskMapper.toActivityTask(activityTaskDTO);
        ActivityTask savedActivityTask = activityTaskRepository.save(activityTask);
        return activityTaskMapper.toActivityTaskDTO(savedActivityTask);
    }

    public ActivityTaskDTO updateActivityTask(Long id, ActivityTaskDTO activityTaskDTO) {
        ActivityTask activityTask = activityTaskMapper.toActivityTask(activityTaskDTO);
        ActivityTask updatedActivityTask = activityTaskRepository.save(activityTask);
        return activityTaskMapper.toActivityTaskDTO(updatedActivityTask);
    }

    public void deleteActivityTask(Long activityTaskId) {
        activityTaskRepository.deleteById(activityTaskId);
    }
    public List<ActivityTaskDTO> findActivityTasksByActivityIdAndIsCompleted(Long activityId) {
        List<ActivityTask> activityTasks = activityTaskRepository.findActivityTasksByActivityIdAndIsCompleted(activityId);
        return activityTaskMapper.toActivityTaskDTOs(activityTasks);
    }

    public List<ActivityTaskDTO> findActivityTasksByUserId(Long userId) {
        List<ActivityTask> activityTasks = activityTaskRepository.findActivityTasksByUserId(userId);
        return activityTaskMapper.toActivityTaskDTOs(activityTasks);
    }
}
