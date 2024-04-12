import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EmailService } from './email.service';
import { renderTemplate } from './email-templates';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BaseDto } from './dto/base.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('sendemail')
  @UseGuards(JwtAuthGuard)
  async sendEmail(@Body() baseDto: BaseDto) {
    try {
      const htmlContent = renderTemplate(
        baseDto.templateName,
        baseDto.bodyProperty,
      );

      await this.emailService.sendEmail(baseDto, htmlContent);

      return { message: 'Correo electronico enviado exitosamente.' };
    } catch (error) {
      throw new Error('No se pudo enviar el correo electronico.');
    }
  }
}
