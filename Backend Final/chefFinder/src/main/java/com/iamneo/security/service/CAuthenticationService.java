package com.iamneo.security.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.iamneo.security.dto.request.AuthenticationRequest;
import com.iamneo.security.dto.request.RegisterRequest;
import com.iamneo.security.dto.response.AuthenticationResponse;
import com.iamneo.security.entity.Role;
import com.iamneo.security.entity.Chef;
import com.iamneo.security.repository.ChefRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CAuthenticationService {

    private final ChefRepository chefRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var chef = Chef
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .mobile(request.getMobile())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CHEF)
                .build();
        chefRepository.save(chef);
        var jwtToken = jwtService.generateToken(chef);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var chef = chefRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(chef);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}
