import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginSchema } from './schema/login-schema';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports:[MongooseModule.forFeature([{ name: LoginSchema.name, schema: LoginSchema }])]
})
export class LoginModule {}
