import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginBodyDto } from '../dto_varios/loginBodyDto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(loginDto: LoginBodyDto) {
        const userExists = await this.userService.findOne(loginDto.email);
        if (!userExists) {
            throw new UnauthorizedException("El usuario no existe.")
        }

        const validPassword = await bcrypt.compare(loginDto.password, userExists.password);
        if (!validPassword) {
            throw new UnauthorizedException("Contraseña incorrecta.")
        }

        const payload = { email: loginDto.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

