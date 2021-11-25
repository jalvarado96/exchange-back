import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Exchange from './entity/exchange.entity';
import Role from './entity/role.entity';
import User from './entity/users.entity';
import usersInfo from './entity/usersInfo.entity';
import Transactions from './entity/transaction.entity';



@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host:'localhost',
        port: 5433,
        username: 'postgres',
        password:'PW',
        database: 'exchange-back',
        synchronize: false,
        entities: [__dirname + '/**/*.entity{.ts,.js}',
        User,
        Role,
        usersInfo,
        Transactions,
        Exchange],
    })]
})

export class DatabaseModule {}
