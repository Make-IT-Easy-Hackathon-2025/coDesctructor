package com.dev.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private String url;
    private String imageUrl;
    private Integer duration;
    private LocalDateTime deadline;

    public Event() {
    }

    public Event(Long id, String name, String description, String url, String imageUrl, Integer duration, LocalDateTime deadline) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.deadline = deadline;
    }

    public Event(String name, String description, String url, String imageUrl, Integer duration, LocalDateTime deadline) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.deadline = deadline;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getDuration() {return duration;}

    public void setDuration(Integer duration) {this.duration = duration;}

    public LocalDateTime getDeadline(){return deadline;}

    public void setDeadline(LocalDateTime deadline){this.deadline = deadline;}
}
