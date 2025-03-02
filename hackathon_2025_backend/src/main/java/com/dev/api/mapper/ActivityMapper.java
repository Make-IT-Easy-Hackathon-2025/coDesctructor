package com.dev.api.mapper;

import com.dev.api.dto.ActivityDTO;
import com.dev.entity.Activity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ActivityMapper {
    Activity toEntity(ActivityDTO dto);

    ActivityDTO toDto(Activity entity);

    List<ActivityDTO> toDtos(List<Activity> activities);
}
