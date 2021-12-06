import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User';
import { UserUpdateDto } from './dto/updateUserDto';
import { UserDto } from './dto/userDto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll() {
        return this.userRepository.find();
    }

    async create(createUserDto: UserDto) {
        const userExists = await this.userRepository
            .createQueryBuilder('user')
            .where('user.username like :username', { name: `%${createUserDto.username}%` })
            .getOne();
        if (userExists) {
            throw new ConflictException('Ya existe un user con ese nombre');
        }

        const newUser = new User();
        newUser.email = createUserDto.email;
        newUser.adress = createUserDto.adress;
        newUser.state = createUserDto.state;
        newUser.birthdate = createUserDto.birthdate;
        newUser.phonenumber = createUserDto.phonenumber;
        newUser.username = createUserDto.username;
        newUser.lastname = createUserDto.lastname;
        newUser.selfie = createUserDto.selfie;
        newUser.dniFront = createUserDto.dniFront;
        newUser.dniBack = createUserDto.dniBack;
        newUser.documentDate = createUserDto.documentDate;
        newUser.documentType = createUserDto.documentType;
        newUser.documentNumber = createUserDto.documentNumber;
        newUser.role = createUserDto.role;
        newUser.recoverHash = createUserDto.recoverHash;
        return this.userRepository.save(newUser);
    }

    async findOne(email: string): Promise<User | undefined> {
        const userExists = await this.userRepository.findOne({
            email
        });
        if (!userExists) {
            throw new UnauthorizedException('El usuario no existe.')
        }
        return userExists
    }

    async update(id: number, updateUserDto: UserUpdateDto) {
        const userExists = await this.userRepository
            .createQueryBuilder('role')
            .where('role.id = :id', { id: id })
            .getOne();
        if (!userExists) {
            throw new NotFoundException('No existe un rol con ese id');
        }
        const userExistsByName = await this.userRepository
            .createQueryBuilder('role')
            .where('role.name like :name', { name: `%${updateUserDto.username}%` })
            .getOne();
        if (userExistsByName && userExistsByName.id !== Number(id)) {
            throw new ConflictException('Ya existe un rol con ese nombre');
        }
        userExists.email = updateUserDto.email ? updateUserDto.email : userExists.email;
        userExists.adress = updateUserDto.adress ? updateUserDto.adress : userExists.adress;
        userExists.state = updateUserDto.state ? updateUserDto.state : userExists.state;
        userExists.birthdate = updateUserDto.birthdate ? updateUserDto.birthdate : userExists.birthdate;
        userExists.phonenumber = updateUserDto.phonenumber ? updateUserDto.phonenumber : userExists.phonenumber;
        userExists.username = updateUserDto.username ? updateUserDto.username : userExists.username;
        userExists.lastname = updateUserDto.lastname ? updateUserDto.lastname : userExists.lastname;
        userExists.selfie = updateUserDto.selfie ? updateUserDto.selfie : userExists.selfie;
        userExists.dniFront = updateUserDto.dniFront ? updateUserDto.dniFront : userExists.dniFront;
        userExists.dniBack = updateUserDto.dniBack ? updateUserDto.dniBack : userExists.dniBack;
        userExists.documentDate = updateUserDto.documentDate ? updateUserDto.documentDate : userExists.documentDate;
        userExists.documentType = updateUserDto.documentType ? updateUserDto.documentType : userExists.documentType;
        userExists.documentNumber = updateUserDto.documentNumber ? updateUserDto.documentNumber : userExists.documentNumber;
        userExists.role = updateUserDto.role ? updateUserDto.role : userExists.role;
        userExists.recoverHash = updateUserDto.recoverHash ? updateUserDto.recoverHash : userExists.recoverHash;

        return this.userRepository.save(userExists);
    }

    async remove(id: number) {
        let data = await this.userRepository
            .createQueryBuilder('user')
            .where('user.id = :id', { id: id })
            .getOne();
        if (!data) {
            throw new ConflictException('No existe un user con ese id.');
        }
        await this.userRepository.delete({ id });
        data = await this.userRepository
            .createQueryBuilder('user')
            .where('user.id = :id', { id: id })
            .getOne();
        return data
    }
}
