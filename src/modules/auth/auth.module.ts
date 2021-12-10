import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { CustomMailService } from '../mailer/mailer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: Number(jwtConstants.expiresIn) },
    }),
  ],
  providers: [AuthService, JwtStrategy, Repository, CustomMailService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
