import { Injectable } from '@nestjs/common';
import { User } from '../entity/User';

@Injectable()
export class UserService {
    private readonly users = [];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
