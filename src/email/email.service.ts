import { Injectable } from '@nestjs/common';
import { transporterGmail } from './config/transport.config';
import { BaseDto } from './dto/base.dto';

@Injectable()
export class EmailService {
  async sendEmail(baseDto: BaseDto, html: string) {
    const mailOptions = {
      to: baseDto.emailTo,
      subject: baseDto.templateName,
      html: html,
    };

    try {
      const info = await transporterGmail.sendMail(mailOptions);
      return info;
    } catch (error) {
      throw error;
    }
  }
}
