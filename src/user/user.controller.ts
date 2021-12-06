import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserUpdateDto } from './dto/updateUserDto';
import { UserDto } from './dto/userDto';
import { UserService } from './user.service';
import { Request } from 'express'

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findAll(
        @Req() req: Request
    ) {
        console.log({
            req
        })
        return this.userService.findAll();
    }

    @Post()
    create(@Body() createUserDto: UserDto) {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UserUpdateDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Get(':id')
    findOneById(@Param('id') id: number) {
        return this.userService.findOneById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(id);
    }
}

