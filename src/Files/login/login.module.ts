import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonService } from 'src/common/common-service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginSchema } from './schema/login-schema';

@Module({
  controllers: [LoginController],
  providers: [LoginService, CommonService],
  imports: [MongooseModule.forFeature([{ name: 'login', schema: LoginSchema, collection: 'login' }])]
})
export class LoginModule { }
