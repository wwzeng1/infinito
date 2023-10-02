import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signIn')
  async signIn(@Req() request: any) {
    // Extract the user from the request object
    const user = request.user;
    // Generate a token using the authService
    const token = await this.authService.generateToken(user);
    // Return the generated token as a response
    return { token };
  }

  @Post('login')
  async login(@Req() request: any) {
    // Extract the user from the request object
    const user = request.user;
    // Call the login function from the authService and await the result
    const { access_token } = await this.authService.login(user);
    // Return the access_token as a response with the key 'token'
    return { token: access_token };
  }
}
