import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonService } from 'src/common/common-service';
import { LoginModel } from './schema/login-schema';
@Injectable()
export class LoginService {
  constructor(
    private _common_service: CommonService,

    @InjectModel('login')
    private readonly userRepository: Model<LoginModel>
  ) { }

  async createUser(body: Record<string, any>) {
    try {
      console.log('body');
      body['code'] = this._common_service.generateCode('USR')
      await this.userRepository.create(body)
      return {
        message: 'Created successfully.',
        status: HttpStatus.OK
      }

    } catch (error) { }
  }
}


