package com.dev.repository;

import com.dev.entity.ActivityTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityTaskRepository extends JpaRepository<ActivityTask, Long> {
    List<ActivityTask> findActivityTasksByActivityId(Long activityId);
    @Query("SELECT a FROM ActivityTask a WHERE a.activityId = ?1 AND a.isCompleted = TRUE")
    List<ActivityTask> findActivityTasksByActivityIdAndIsCompleted(Long activityId);

    @Query("SELECT a FROM ActivityTask a WHERE a.id = ?1")
    List<ActivityTask> findActivityTasksByUserId(Long userId);
}
