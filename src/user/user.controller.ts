import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor (private userService:UserService){}
    @Post()
    async create(@Body() CreateUserDto:CreateUserDto){
        return this.userService.createUser(CreateUserDto)
    }
}
