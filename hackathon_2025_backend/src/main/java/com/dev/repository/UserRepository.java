package com.dev.repository;

import com.dev.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long> {
    UserInfo findUserByIdIs(Long id);
    List<UserInfo> findAll();
    UserInfo findUserByEmail(String email);
    void deleteById(Long id);
}
