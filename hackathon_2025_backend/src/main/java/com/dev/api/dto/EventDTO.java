package com.dev.api.dto;

import java.time.LocalDateTime;

public class EventDTO {
    private Long id;
    private String name;
    private String description;
    private String url;
    private String imageUrl;
    private Integer duration;
    private LocalDateTime deadline;

    public EventDTO() {
    }

    public EventDTO(Long id, String name, String description, String url, String imageUrl, Integer duration, LocalDateTime deadline) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.deadline = deadline;
    }

    public EventDTO(String name, String description, String url, String imageUrl, Integer duration, LocalDateTime deadline) {
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
