package com.dev.repository;

import com.dev.entity.Activity;
import com.dev.enums.ActivityType;
import com.dev.enums.Priority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Activity findActivityByIdIs(Long id);
    List<Activity> findActivitiesByUserId(Long id);
    List<Activity> findActivitiesByUserIdAndPriority(Long id, Priority priority);
    List<Activity> findActivitiesByUserIdAndActivityType(Long userId, ActivityType activityType);
    List<Activity> findActivitiesByUserIdAndPriorityAndActivityType(Long userId, Priority priority, ActivityType activityType);

}
