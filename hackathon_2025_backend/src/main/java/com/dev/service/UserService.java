package com.dev.service;

import com.dev.api.dto.UserDTO;
import com.dev.api.mapper.UserMapper;
import com.dev.entity.UserInfo;
import com.dev.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public UserDTO findUserById(Long id) {
        UserInfo userInfo = userRepository.findUserByIdIs(id);
        return userMapper.toDto(userInfo);
    }

    public List<UserDTO> findAllUsers() {
        List<UserInfo> userInfos = userRepository.findAll();
        return userMapper.toDtos(userInfos);
    }

    public UserDTO saveUser(UserDTO userDTO) {
        UserInfo savedUserInfo = userRepository.save(userMapper.toEntity(userDTO));
        return userMapper.toDto(savedUserInfo);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public UserDTO findUserByEmail(String email) {
        UserInfo userInfo = userRepository.findUserByEmail(email);
        return userMapper.toDto(userInfo);
    }
}
