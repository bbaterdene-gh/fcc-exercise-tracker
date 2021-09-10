import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => {
      return { _id: user._id, username: user.username };
    });
  }

  @Post()
  async createOne(@Body('username') username) {
    const newUser = await this.usersService.createOne(username);
    return {
      username: newUser.username,
      _id: newUser._id,
    };
  }
}
