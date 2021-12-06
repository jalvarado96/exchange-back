import { IsNotEmpty, IsUUID } from "class-validator";

export class ResetPasswordDto {
    @IsNotEmpty()
    @IsUUID()
    recoverHash: string;

    @IsNotEmpty()
    password: string;
}