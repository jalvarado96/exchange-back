import { Injectable, NotFoundException } from '@nestjs/common';
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

    async findOne(id: string): Promise<User | undefined> {
        const userExists = await this.userRepository.findOne(id);
        if (!userExists) {
            throw new NotFoundException('El role no existe.')
        }
        return userExists
    }
}
