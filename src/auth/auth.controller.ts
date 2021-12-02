import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginBodyDto } from '../dto_varios/loginBodyDto';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(JwtAuthGuard)
    @Post('auth/login')
    async login(loginDto: LoginBodyDto) {
        return this.authService.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(loginDto: LoginBodyDto) {
        return loginDto.username;
    }
}