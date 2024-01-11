import { Body, Controller, Post } from '@nestjs/common';
import { createUSerDto } from './dto/login-dto';
import { LoginService } from './login.service';

@Controller({path:'files/login'})
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  async createUser(@Body() body:createUSerDto){
    console.log("in post",body);
    
    return await  this.loginService.createUser(body)
  }
}
