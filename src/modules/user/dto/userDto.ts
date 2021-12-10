import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Role } from '../../../entity/Role';
import { User } from '../../../entity/User';

export class UserDto {

  @ApiProperty()
  @IsNotEmpty({
    message: 'Debe proporcionar un email'
  })
  email: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Debe proporcionar una contraseña'
  })
  password: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  adress: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  city: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  state: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  birthdate: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  phonenumber: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  username: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  lastname: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  selfie: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  dniFront: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  dniBack: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  documentDate: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  documentType: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  documentNumber: string;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  role: Role;

  @ApiProperty()
  @IsOptional({
    message: ''
  })
  recoverHash: string;


  public toRoleEntity(): User {
    const newUser = new User();
    newUser.email = this.email;
    newUser.adress = this.adress;
    newUser.state = this.state;
    newUser.birthdate = this.birthdate;
    newUser.phonenumber = this.phonenumber;
    newUser.username = this.username;
    newUser.lastname = this.lastname;
    newUser.selfie = this.selfie;
    newUser.dniFront = this.dniFront;
    newUser.dniBack = this.dniBack;
    newUser.documentDate = this.documentDate;
    newUser.documentType = this.documentType;
    newUser.documentNumber = this.documentNumber;
    newUser.role = this.role;
    newUser.recoverHash = this.recoverHash;

    return newUser;
  }

}