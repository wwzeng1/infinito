import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signIn')
  async signIn(@Req() request: any) {
    const user = request.user;
    const token = await this.authService.generateToken(user);
    return { token };
  }

  @Post('login')
  async login(@Req() request: any) {
    const user = request.user;
    const { access_token } = await this.authService.login(user);
    return { token: access_token };
  }
}
