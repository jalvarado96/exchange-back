import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginBodyDto {

    @ApiProperty()
    @IsNotEmpty({
        message: 'Debe proporcionar un email válido'
    })
    email: string;

    @ApiProperty()
    @IsNotEmpty({
        message: 'Debe proporcionar una cotraseña'
    })
    password: string;

}