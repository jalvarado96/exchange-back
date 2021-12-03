import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { RoleDto } from './dto/roleDto';
import { RoleUpdateDto } from './dto/updateRoleDto';
import { RoleService } from './role.service';

@ApiTags('Roles')
@Controller('roles')
@UseGuards(AuthGuard('jwt'))
export class RoleController {
  constructor(private readonly roleService: RoleService) { }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Post()
  create(@Body() createRoleDto: RoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateRoleDto: RoleUpdateDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.roleService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roleService.remove(id);
  }

  @Patch(':id/reactivate')
  reactivate(@Param('id') id: number) {
    return this.roleService.reactivate(id)
  }

}
