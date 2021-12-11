import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { User } from '../../entity/User';

export interface IMailOptions {

  templateName: string
  html: string
  subject: string
  from: string
  to: string[]
  context: any
  attachments: any[]

}

@Injectable()
export class CustomMailService {
  constructor(private mailerService: MailerService) { }
  private readonly logger = new Logger(CustomMailService.name);


  // avoid to use particular method in a general service.

  async sendUserNotification(user: User, title: any, template: any, check = true): Promise<{ message: string, sent: boolean }> {
    try {
      await this.mailerService.sendMail({
        to: user.email,
        from: '"Akkordar Team" <noreply@akkordar.com>',
        subject: `Akkordar App! ${title}`,
        template,
        context: {
          user,
          check,
          date: new Date().getFullYear(),
          app: process.env.APP_NAME,
          logo: process.env.APP_LOGO,
          urlWeb: process.env.APP_URL
        },
      });
      this.logger.log(`Mail sent successfully to ${user.email}`);
      return {
        message: `Correo electrónico enviado exitosamente a ${user.email}`,
        sent: true
      }
    } catch (error) {
      this.logger.log(`Mail doest not sent successfully to ${user.email} due: ${error.message}`);
      console.log(error)
      return {
        message: `Correo electrónico no enviado a  ${user.email} due: ${error.message}`,
        sent: false
      }
    }
  }

  async sendMail(mailOptions: IMailOptions): Promise<{ message: string, sent: boolean }> {

    let sendEmailOptions: any = {
      to: mailOptions.to,
      from: mailOptions.from || 'noreply@nestjs.com',
      subject: mailOptions.subject,
    }

    if (mailOptions.templateName) {
      sendEmailOptions = {
        ...sendEmailOptions,
        template: `./${mailOptions.templateName}.hbs`,
        context: mailOptions.context
      }
    }

    sendEmailOptions = {
      ...sendEmailOptions,
      attachments: mailOptions.attachments
    }

    try {
      await this.mailerService.sendMail(sendEmailOptions)
      this.logger.log(`Mail sent to ${mailOptions.to}`)
      return { message: `Correo electrónico enviado exitosamente a  ${mailOptions.to}`, sent: true }

    } catch (error) {
      this.logger.log(`Mail not sent to ${mailOptions.to} due. ${error.message}`)

      return { message: `Correo electrónico no enviado a ${mailOptions.to} due. ${error.message}`, sent: false }
    }
  }

}