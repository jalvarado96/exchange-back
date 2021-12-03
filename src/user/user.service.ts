import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User';

@Injectable()
export class UserService {
    private readonly users = [];
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findOne(email: string): Promise<User | undefined> {
        const userExists = await this.userRepository.findOne({
            email
        });
        if (!userExists) {
            throw new UnauthorizedException('El usuario no existe.')
        }
        return userExists
    }
}
