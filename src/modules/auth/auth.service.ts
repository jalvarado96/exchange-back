import { ConflictException, Injectable, NotFoundException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginBodyDto } from './dto/loginBody.dto';
import * as bcrypt from 'bcrypt'
import { JWTPayload } from './interfaces/jwt-payload';
import { LoginPresentation } from './presentation/login.presentation';
import { RecoverPasswordDto } from './dto/recoverPassword.dto';
import { User } from '../../entity/User';
import { Repository } from 'typeorm';
import { RecoverPasswordResponse } from './presentation/recoverPassword.presentation';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomMailService, IMailOptions } from '../mailer/mailer.service';
import { RegisterBodyDto } from './dto/registerBody.dto';
import { RegisterResponsePresentation } from './presentation/register.presentation';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private readonly mailerService: CustomMailService,
        @InjectRepository(User)
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

    async recoverPassword(recoverPasswordDto: RecoverPasswordDto): Promise<RecoverPasswordResponse> {

        const secretWord = 'X-Exchange'
        const { email } = recoverPasswordDto;
        const user: User = await this.userRepository.findOne({ email });
        if (!user) {
            throw new NotFoundException("Usuario inexistente.")
        }
        const salt = bcrypt.genSaltSync(10);
        const recoverHash = bcrypt.hashSync(secretWord, salt);
        user.recoverHash = recoverHash
        const recoverLink = `http://localhost:3001/recover/${recoverHash}`

        const mailOption: IMailOptions = {
            attachments: [],
            context: {
                link: recoverLink
            },
            from: 'no-reply@demo.com',
            html: null,
            subject: 'Recupera tu contraseña.',
            templateName: 'recover-pass',
            to: [user.email]
        }

        const result = await this.mailerService.sendMail(mailOption)

        if (!result.sent) {
            throw new ServiceUnavailableException(result.message)
        }

        await this.userRepository.save(user)

        return {
            message: 'Hemos enviado un mail con las intrucciones de recuperación de contraseña'
        }

    }

    async resetPassword(hash: string, newPassword: string): Promise<RecoverPasswordResponse> {
        const user: User = await this.userRepository.findOne({ recoverHash: hash });
        if (!user) {
            throw new ConflictException("El token que ha ingresado es inválido.")
        }
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(newPassword, salt);
        user.recoverHash = null
        const mailOption: IMailOptions = {
            attachments: [],
            context: {},
            from: 'no-reply@demo.com',
            html: null,
            subject: 'Recupera tu contraseña.',
            templateName: 'password-reset',
            to: [user.email]
        }
        const result = await this.mailerService.sendMail(mailOption);
        if (!result.sent) {
            throw new ServiceUnavailableException(result.message)
        }
        await this.userRepository.save(user);
        return {
            message: 'Hemos cambiado la contraseña del usuario exitosamente.'
        }
    }

    async register(registerBody: RegisterBodyDto): Promise<RegisterResponsePresentation> {

        const userExists = await this.userRepository.findOne({ email: registerBody.email });

        if (userExists) {
            throw new ConflictException('Ya existe un usario con ese email.')
        }

        const user: User = new User();
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(registerBody.password, salt);

        user.email = registerBody.email;
        user.password = password;
        user.username = registerBody.username;
        user.city = registerBody.country

        await this.userRepository.save(user);

        const mailOptions: IMailOptions = {
            attachments: [],
            context: {
                email: registerBody.email
            },
            from: '',
            html: null,
            subject: 'Bienvenido a la plataforma',
            templateName: 'welcome',
            to: [user.email]
        }

        this.mailerService.sendMail(mailOptions)

        const payload: JWTPayload = { email: user.email };

        const accessToken = this.jwtService.sign(payload)

        return {
            message: 'Se ha registrado el usuario exitosamente',
            accessToken,
            country: user.city,
            email: user.email,
            userName: user.username
        }

    }

}



