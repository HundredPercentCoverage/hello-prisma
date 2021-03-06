import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async signUpUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }
}
