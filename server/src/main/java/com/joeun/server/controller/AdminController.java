package com.joeun.server.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/Product")
public class AdminController {

    // /admin/, /admin
    // 관리자 권한(ROLE_ADMIN)을 가진 사용자만 접근 허용
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value={"/", ""})
    public String index() {
        log.info("[GET] - /admin");
        return "admin/index";
    }
}
