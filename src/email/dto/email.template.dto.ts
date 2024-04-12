import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class JobNotification {
  @ApiProperty()
  @IsNotEmpty()
  startDate: string;

  @ApiProperty()
  @IsNotEmpty()
  endDate: string;

  @ApiProperty()
  @IsNotEmpty()
  projectName: string;

  @ApiProperty()
  @IsNotEmpty()
  foreman: string;
}

export class PasswordReset {
  @ApiProperty()
  @IsNotEmpty()
  pageRecoveryLink: string;

  @ApiProperty()
  @IsNotEmpty()
  passwordHash: string;
}

export class Events {
  @ApiProperty()
  @IsNotEmpty()
  where: string;

  @ApiProperty()
  @IsNotEmpty()
  when: string;

  @ApiProperty()
  @IsNotEmpty()
  organizer: string;

  @ApiProperty()
  @IsNotEmpty()
  guest: string;
}
