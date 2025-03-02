package com.dev.api.mapper;

import com.dev.api.dto.ActivityTaskDTO;
import com.dev.entity.ActivityTask;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ActivityTaskMapper {
    ActivityTaskDTO toActivityTaskDTO(ActivityTask activityTask);
    ActivityTask toActivityTask(ActivityTaskDTO activityTaskDTO);
    List<ActivityTaskDTO> toActivityTaskDTOs(List<ActivityTask> activityTasks);
    List<ActivityTask> toActivityTasks(List<ActivityTaskDTO> activityTaskDTOs);
}
