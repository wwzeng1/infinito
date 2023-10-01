import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import UserService from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData) {
    return this.userService.create(userData);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async read(@Param('id') userId) {
    return this.userService.read(userId);
  }

  @Put(':id')
  async update(@Param('id') userId, @Body() newUserData) {
    return this.userService.update(userId, newUserData);
  }

  @Delete(':id')
  async delete(@Param('id') userId) {
    return this.userService.delete(userId);
  }
}
