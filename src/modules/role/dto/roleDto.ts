import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Role } from '../../../entity/Role';

export class RoleDto {

  @ApiProperty()
  @IsNotEmpty({
    message: 'Debe proporcionar el nombre'
  })
  name: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Debe proporcionar la descripción'
  })
  description: string;

  public toRoleEntity(): Role {
    const newRole = new Role();
    newRole.name = this.name;
    newRole.description = this.description;
    newRole.isActive = true;

    return newRole;
  }

}
