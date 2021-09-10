import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOne(@Body('username') username) {
    const newUser = await this.usersService.createOne(username);
    return {
      username: newUser.username,
      _id: newUser._id,
    };
  }
}
