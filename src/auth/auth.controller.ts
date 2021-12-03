import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginBodyDto } from './dto/loginBody.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginPresentation } from './presentation/login.presentation';
import { ApiRequest } from './interfaces/api-request';

@ApiTags('Authentication')
@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('auth/login')
    @ApiResponse({
        status: 401,
        description: 'Usuario o contraseña incorrectas.'
    })
    @ApiResponse({
        status: 201,
        description: 'Acceso exitoso al usuario.',
        type: LoginPresentation
    })
    async login(
        @Body()
        loginDto: LoginBodyDto
    ): Promise<LoginPresentation> {
        return this.authService.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    @ApiBearerAuth()
    getProfile(
        @Req() req: ApiRequest
    ) {
        return req.user
    }

}
