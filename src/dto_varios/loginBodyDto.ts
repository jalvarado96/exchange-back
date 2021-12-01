import { IsNotEmpty, IsOptional } from 'class-validator';
import { User } from '../entity/User';

export class LoginBodyDto {
    @IsNotEmpty({
    })
    userId: User["id"];

    @IsOptional()
    @IsNotEmpty({
        message: 'Debe proporcionar el nombre de usuario'
    })
    username: string;

    @IsOptional()
    @IsNotEmpty({
        message: 'Debe proporcionar un email válido'
    })
    email: string;

}