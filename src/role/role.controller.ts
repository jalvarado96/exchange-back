import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { Role } from '../entity/Role';
import { RoleDto } from './dto/roleDto';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: RoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRoleDto: RoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roleService.remove(id);
  }
}
