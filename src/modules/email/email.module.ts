import { Module } from '@nestjs/common';
import { EmailController } from './controller/email.controller';
import { EmailService } from './service/email.service';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
