/* eslint-disable prettier/prettier */
import { ConflictException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entity/Role';
import { RoleDto } from './dto/roleDto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async remove(id: number, updateRoleDto: Role) {
    const data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id})
      .getOne();
    if (!data) {
      throw new ConflictException('No existe un rol con ese id');
    }
    const newRole = new Role();
    newRole.id = id;
    newRole.name = updateRoleDto.name;
    newRole.description = updateRoleDto.description;
    newRole.isActive = false;
    return this.roleRepository.save(newRole);
  }

  async update(id: number, updateRoleDto: Role) {
    const data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.id = :id', { id: id})
      .getOne();
    if (!data) {
      throw new ConflictException('No existe un rol con ese id');
    }
    const newRole = new Role();
    newRole.id = id;
    newRole.name = updateRoleDto.name;
    newRole.description = updateRoleDto.description;
    newRole.isActive = true;
    return this.roleRepository.save(newRole);
  }

  async findOne(id: number) {
    return this.roleRepository.findOne(id);
  }

  async create(createRoleDto: RoleDto) {
    const data = await this.roleRepository
      .createQueryBuilder('role')
      .where('role.name like :name', { name: `%${createRoleDto.name}%` })
      .getOne();
    if (data) {
      throw new ConflictException('Ya existe un rol con ese nombre');
    }
    //return this.roleRepository.create(createRoleDto.toRoleEntity());
    const newRole = new Role();
    newRole.name = createRoleDto.name;
    newRole.description = createRoleDto.description;
    newRole.isActive = true;
    return this.roleRepository.save(newRole);
  }

  async findAll() {
    return this.roleRepository.find({
      order: {
        name: 'ASC',
        id: 'DESC',
      },
    });
  }
}
