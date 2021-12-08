import { Body, ConflictException, Injectable, NotFoundException, Post, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { User } from '../entity/User';
import * as bcrypt from 'bcrypt'
import { transporter } from '../mailer';
import { Role } from '../entity/Role';


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
    
    async createUser(CreateUserDto: CreateUserDto) {
        const email = CreateUserDto.email
        const userExists = await this.userRepository.findOne({
            email
        })
         if (userExists) {
           throw new ConflictException('Ya existe un User con ese email');
         } else {
        const salt = bcrypt.genSaltSync(10);
        const newUser:any = new User();
        newUser.email = CreateUserDto.email;
        newUser.password = bcrypt.hashSync(CreateUserDto.password, salt);
        //const role = ;
        newUser.role = await getRepository('role').findOne({ name: 'EXCHANGER' })
        
        //send email
        transporter.sendMail({
        from: '"Exchanging your world" <GTnotificationcenter@gmail.com>', // sender address
        to:newUser.email, // list of receivers
        subject: "Welcome to the future, now", // Subject line
        html: "<b>Congrats!! Now you can enjoy doing any transaction like a champ</b>", // html body
        });
        return this.userRepository.save(newUser);
      }}

}
