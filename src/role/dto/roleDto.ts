import { IsNotEmpty } from 'class-validator';
import { Role } from '../../entity/Role';

export class RoleDto {
  @IsNotEmpty({
    message: 'Debe proporcionar el nombre'
  })
  id: number;

  @IsNotEmpty({
    message: 'Debe proporcionar el nombre'
  })
  name: string;

  @IsNotEmpty({
    message: 'Debe proporcionar la descripción'
  })
  description: string;

  @IsNotEmpty({
    message: 'Debe proporcionar la descripción'
  })
  isActive: boolean;

  public toRoleEntity(): Role {
    const newRole = new Role();
    newRole.name = this.name;
    newRole.description = this.description;
    newRole.isActive = true;

    return newRole;
  }
}