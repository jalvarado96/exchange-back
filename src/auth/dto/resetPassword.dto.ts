import { IsNotEmpty } from "class-validator";

export class ResetPasswordDto {
    @IsNotEmpty()
    recoverHash: string;

    @IsNotEmpty()
    password: string;
}