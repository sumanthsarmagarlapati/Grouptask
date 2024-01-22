import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, UserLoginDto } from './dto/login-dto';
import { UserService } from './login.service';

@Controller({ path: 'login' })
export class LoginController {
  constructor(private readonly loginService: UserService) {}

  @Post()
  async userLogin(@Body() body: UserLoginDto) {
    return await this.loginService.userLogin(body);
  }

  @Post('create')
  async createUser(@Body() body: CreateUserDto) {
    return await this.loginService.createUser(body);
  }
}
