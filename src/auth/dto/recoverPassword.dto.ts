import { isEmail, isNotEmpty } from 'class-validator'

export class RecoverPasswordDto {
    @isNotEmpty()
    @isEmail()
    email: string;

}