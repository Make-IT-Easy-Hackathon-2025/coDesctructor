package com.dev.api.controller;

import com.dev.api.dto.EventDTO;
import com.dev.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping()
    public List<EventDTO> getEvents() {
        return eventService.getEvents();
    }

    @GetMapping("/id/{id}")
    public EventDTO getEvent(@PathVariable Long id) {
        return eventService.getEvent(id);
    }
    @PostMapping()
    public EventDTO createEvent(@RequestBody EventDTO eventDTO) {
        return eventService.createEvent(eventDTO);
    }

    @PutMapping("/id/{id}")
    public EventDTO updateEvent(@PathVariable Long id, @RequestBody EventDTO eventDTO) {
        return eventService.updateEvent(id, eventDTO);
    }

    @DeleteMapping("/id/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }

}
