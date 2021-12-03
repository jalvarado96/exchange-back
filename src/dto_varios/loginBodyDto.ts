import { IsNotEmpty, IsOptional } from 'class-validator';
import { User } from '../entity/User';

export class LoginBodyDto {
    @IsOptional()
    @IsNotEmpty({
        message: 'Debe proporcionar el nombre de usuario'
    })
    username: string;

    @IsNotEmpty({
        message: 'Debe proporcionar un email válido'
    })
    email: string;

    @IsNotEmpty({
        message: 'Debe proporcionar una cotraseña'
    })
    password: string;

}