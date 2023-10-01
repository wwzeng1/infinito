import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from './constants';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(user: any) {
    const { password, ...result } = user;
    return this.jwtService.sign(result, { secret: JWT_SECRET });
  }
}
