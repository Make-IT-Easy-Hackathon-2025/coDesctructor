package com.dev.repository;

import com.dev.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
    Event findEventById(Long id);
}
