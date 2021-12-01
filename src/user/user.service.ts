import { Injectable } from '@nestjs/common';
import { User } from '../entity/User';

@Injectable()
export class UserService {
    private readonly users = [];

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }
}
