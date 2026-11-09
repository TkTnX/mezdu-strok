import { ROLES_KEY } from '@/src/decorators';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<string>(ROLES_KEY, context.getHandler());

    if (!role) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.session?.user;

    if (!user || role !== user.role)
      throw new ForbiddenException('Недостаточно прав!');

    return true;
  }
}
