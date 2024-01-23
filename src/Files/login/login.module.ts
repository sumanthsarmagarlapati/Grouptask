import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonService } from 'src/common/common-service';
import { LoginController } from './login.controller';
import { UserSchema } from './schema/login-schema';
import { UserService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [UserService, CommonService],
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema, collection: 'user' }])]
})
export class LoginModule { }
