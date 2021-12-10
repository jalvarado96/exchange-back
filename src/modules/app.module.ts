import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CustomMailerModule } from './mailer/mailer.module';

@Module({
  imports: [DatabaseModule, RoleModule, AuthModule, UserModule, CustomMailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
