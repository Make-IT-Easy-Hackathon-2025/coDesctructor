package com.dev.api.mapper;

import com.dev.api.dto.EventDTO;
import com.dev.entity.Event;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EventMapper {
    Event toEntity(EventDTO eventDTO);

    EventDTO toDto(Event event);

    List<Event> toEntities(List<EventDTO> eventDTOs);

    List<EventDTO> toDtos(List<Event> events);
}
