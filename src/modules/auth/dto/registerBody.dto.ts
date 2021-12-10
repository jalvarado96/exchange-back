import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'

export class RegisterBodyDto {

    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsNotEmpty()
    country: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

}