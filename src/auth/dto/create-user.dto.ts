import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../entity/Role";


export class CreateUserDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    role: 'EXCHANGER';
    address?: '';
    city?: '';
    state?: '';
    birthdate?: '';
    phonenumber?: '';
    username?: '';
    lastname?: '';
    selfie?: '';
    dniFront?: '';
    dniBack?: '';
    documentDate?: '';
    documentType?: '';
    documentNumber?: '';
    recoverHash?: '';
  }