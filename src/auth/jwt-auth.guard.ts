import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Request>();
    const templateName = req.body.templateName;

    // Permite enviar correos de tipo password reset sin autenticacion
    if (templateName === 'PasswordReset') {
      return true;
    }
    return super.canActivate(context);
  }
}
