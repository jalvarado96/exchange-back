import { ConflictException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../entity/Role';
import { RoleDto } from './dto/roleDto';
import { RoleUpdateDto } from './dto/updateRoleDto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) { }

  async findAll() {
    return this.roleRepository.find({
      order: {
        name: 'ASC',
        id: 'DESC',
      },
      where: {
        isActive: true
      }
    });
  }

  async create(createRoleDto: RoleDto) {
    const roleExists = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.name like :name', { name: `%${createRoleDto.name}%` })
      .getOne();
    if (roleExists) {
      throw new ConflictException('Ya existe un rol con ese nombre');
    }
    const newRole = new Role();
    newRole.name = createRoleDto.name;
    newRole.description = createRoleDto.description;
    newRole.isActive = true;
    return this.roleRepository.save(newRole);
  }

  async findOne(id: number) {
    const roleExists = await this.roleRepository.findOne(id);
    if (!roleExists) {
      throw new NotFoundException('El role no existe.')
    }
    return roleExists
  }

  async update(id: number, updateRoleDto: RoleUpdateDto) {
    const roleExists = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id })
      .getOne();
    if (!roleExists) {
      throw new NotFoundException('No existe un rol con ese id');
    }
    const roleExistsByName = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.name like :name', { name: `%${updateRoleDto.name}%` })
      .getOne();
    if (roleExistsByName && roleExistsByName.id !== Number(id)) {
      throw new ConflictException('Ya existe un rol con ese nombre');
    }
    roleExists.name = updateRoleDto.name ? updateRoleDto.name : roleExists.name;
    roleExists.description = updateRoleDto.description ? updateRoleDto.description : roleExists.description;
    return this.roleRepository.save(roleExists);
  }

  async remove(id: number) {
    let data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id })
      .getOne();
    if (!data) {
      throw new ConflictException('No existe un rol con ese id.');
    }
    if (!data.isActive) {
      throw new ConflictException('Ya el rol se encuentra desactivado.');
    }
    await this.roleRepository.update({ id }, { isActive: false });
    data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id })
      .getOne();
    return data
  }

  async reactivate(id: number) {

    let data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id })
      .getOne();
    if (!data) {
      throw new ConflictException('No existe un rol con ese id.');
    }
    if (data.isActive) {
      throw new ConflictException('Ya el rol se encuentra activado.');
    }
    await this.roleRepository.update({ id }, { isActive: true });
    data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id })
      .getOne();
    return data

  }

}
