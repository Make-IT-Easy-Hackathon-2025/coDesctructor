package com.dev.service;

import com.dev.api.dto.EventDTO;
import com.dev.api.mapper.EventMapper;
import com.dev.entity.Event;
import com.dev.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    private final EventRepository eventRepository;
    private final EventMapper eventMapper;

    public EventService(EventRepository eventRepository, EventMapper eventMapper) {
        this.eventRepository = eventRepository;
        this.eventMapper = eventMapper;
    }

    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = eventMapper.toEntity(eventDTO);
        Event savedEvent = eventRepository.save(event);
        return eventMapper.toDto(savedEvent);
    }

    public EventDTO getEvent(Long id) {
        Event event = eventRepository.findEventById(id);
        return eventMapper.toDto(event);
    }

    public List<EventDTO> getEvents() {
        List<Event> events = eventRepository.findAll();
        return eventMapper.toDtos(events);
    }

    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findEventById(id);
        event.setName(eventDTO.getName());
        event.setDescription(eventDTO.getDescription());
        event.setUrl(eventDTO.getUrl());
        event.setDeadline(eventDTO.getDeadline());
        event.setDuration(eventDTO.getDuration());
        Event updatedEvent = eventRepository.save(event);
        return eventMapper.toDto(updatedEvent);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
