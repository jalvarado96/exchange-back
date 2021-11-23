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
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateRoleDto: RoleDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
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
  findAll() {
    throw new Error('Method not implemented.');
  }
}
