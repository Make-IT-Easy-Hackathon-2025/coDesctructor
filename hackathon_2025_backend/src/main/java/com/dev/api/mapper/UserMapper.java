package com.dev.api.mapper;

import com.dev.api.dto.UserDTO;
import com.dev.entity.UserInfo;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDto(UserInfo entity);

    UserInfo toEntity(UserDTO dto);

    default List<UserDTO> toDtos(List<UserInfo> entities) {
        return entities.stream().map(this::toDto).collect(Collectors.toList());
    }

    default List<UserInfo> toEntities(List<UserDTO> dtos) {
        return dtos.stream().map(this::toEntity).collect(Collectors.toList());
    }
}
