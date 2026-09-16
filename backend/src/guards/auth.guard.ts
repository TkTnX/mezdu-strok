import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.session?.user;

    if (!user) throw new UnauthorizedException('Вы не авторизованы!');

      request['user'] = user;
      
      return true
    }
    

}
