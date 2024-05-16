import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto, UserLoginDto } from './dto/login-dto';
import { UserService } from './login.service';

@Controller({ path: 'login' })
export class LoginController {
  constructor(private readonly loginService: UserService) {}
  @Get('users')
  async getUsers (){
    console.log("in controller get");
    
    return await this.loginService.getUsers()
  }

  @Post()
  async userLogin(@Body() body: UserLoginDto) {
    return await this.loginService.userLogin(body);
  }

  @Post('create')
  async createUser(@Body() body: CreateUserDto) {
    console.log("in controller create");
    
    return await this.loginService.createUser(body);
  }

}
