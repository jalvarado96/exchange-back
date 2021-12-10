import { Module } from '@nestjs/common';
import { CustomMailService } from './mailer.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        transport: {
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: config.get("EMAIL_USER"),
            clientId: config.get("CLIENT_ID"),
            clientSecret: config.get("CLIENT_SECRET"),
            refreshToken: config.get("REFRESH_TOKEN"),
            accessToken: config.get("ACCESS_TOKEN"),
            expires: 1484314697598
          }
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          helpers: {
            ifeq: function (a, b, opts) {
              if (a == b) {
                return opts.fn(this)
              } else {
                return opts.inverse(this)
              }
            },
          },
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [CustomMailService],
  exports: [CustomMailService],
})
export class CustomMailerModule { }