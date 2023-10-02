import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt'; // Added import statement for JwtService
import { UserService } from './user.service'; // Added import statement for UserService

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, UserService, JwtStrategy] // Added JwtService and UserService to the providers array
})
export class AuthModule {}
import { JWT_SECRET } from './constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtStrategy]
})
export class AuthModule {}
