import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EmailDTO } from '../dto/email.dto';
import {
  transporterGmail,
  transporterHotmail,
} from '../config/transport.config';
import { EmailTypes } from '../repository/emailtype';
import { EmailProvider } from '../repository/emailprovider';
@Injectable()
export class EmailService {
  async sendEmail(emailAddress: EmailDTO): Promise<void> {
    const dominio = emailAddress.email.split('@')[1];
    const mailOptions = EmailTypes.type_3;
    mailOptions.to = emailAddress.email;
    try {
      if (dominio.includes(EmailProvider.Gmail)) {
        await transporterGmail.sendMail(mailOptions);
      } else if (
        dominio.includes(EmailProvider.Hotmail) ||
        dominio.includes(EmailProvider.Outlook)
      ) {
        await transporterHotmail.sendMail(mailOptions);
      }
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al enviar el correo electrónico',
      );
    }
  }
}
