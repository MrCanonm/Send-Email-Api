import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from '../service/email.service';
import { EmailDTO } from '../dto/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Post('sendemail')
  async sendEmail(@Body() email: EmailDTO): Promise<{ message: string }> {
    await this.emailService.sendEmail(email);
    return { message: 'Correo electrónico enviado correctamente' };
  }
}
