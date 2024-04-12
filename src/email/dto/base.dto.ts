import { ApiProperty } from '@nestjs/swagger';
import { Events, JobNotification, PasswordReset } from './email.template.dto';
import { IsNotEmpty } from 'class-validator';

export type BodyPropertyType = JobNotification | PasswordReset | Events;

export class BaseDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'luis03301@gmail.com' })
  emailTo: string;

  @IsNotEmpty()
  @ApiProperty()
  bodyProperty: BodyPropertyType;

  @IsNotEmpty()
  @ApiProperty({ example: 'JobNotification' })
  templateName: string;
}
