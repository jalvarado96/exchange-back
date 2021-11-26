import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.DB_HOST,
      host: 'localhost',
      //port: parseInt(process.env.DB_PORT),
      port: 5432,
      username: 'postgres',
      password: 'rivercampeon',
      database: 'exchange',
      synchronize: true,
      entities: [path.join(__dirname, '../entity/**/*.js')]
    })
  ]
})
export class DatabaseModule {}
