import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginBodyDto } from './dto/loginBody.dto';
import * as bcrypt from 'bcrypt'
import { JWTPayload } from './interfaces/jwt-payload';
import { LoginPresentation } from './presentation/login.presentation';
import { RecoverPasswordDto } from './dto/recoverPassword.dto';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { stringify } from 'querystring';
import { RecoverPasswordResponse } from './presentation/recoverPassword.presentation';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private readonly userRepository: Repository<User>,
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(loginDto: LoginBodyDto): Promise<LoginPresentation> {

        const userExists = await this.userService.findOne(loginDto.email);

        if (!userExists) {
            throw new UnauthorizedException("El usuario no existe.")
        }

        const validPassword = await bcrypt.compare(loginDto.password, userExists.password);
        if (!validPassword) {
            throw new UnauthorizedException("Contraseña incorrecta.")
        }

        const payload: JWTPayload = { email: loginDto.email };

        const response: LoginPresentation = {
            accessToken: this.jwtService.sign(payload)
        }

        return response
    }

    async recoverPassword(recoverPasswordDto: RecoverPasswordDto): Promise < RecoverPasswordResponse > {
        const secretWord = 'X-Exchange'
        const { email } = recoverPasswordDto;
        const user: User = await this.userRepository.findOne({ email });
        if(!user) {
            throw new NotFoundException("Usuario inexistente.")
        }
        const salt = bcrypt.genSaltSync(10);
        user.recoverHash = bcrypt.hashSync(secretWord, salt);
        this.userRepository.save(user)
            return {
            message: 'Hemos enviado un mail con las intrucciones de recuperación de contraseña'
        }
    }

    async resetPassword(hash: string, newPassword:string): Promise < RecoverPasswordResponse > {
        const user: User = await this.userRepository.findOne({ recoverHash: hash });
        if(!user) {
            throw new ConflictException("El token que ha ingresado es inválido.")
        }
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(newPassword, salt);
        user.recoverHash = null
        this.userRepository.save(user)
            return {
            message: 'Hemos cambiado la contraseña del usuario exitosamente.'
        }
    }

    }



