import { HttpStatus, Injectable } from '@nestjs/common';
import { LoginSchema } from './schema/login-schema';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common-service';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class LoginService {
  constructor(
    // private _common_service:CommonService,
    
    @InjectModel(LoginSchema.name)
    private readonly userRepository: Repository<LoginSchema>,
    ) {}

  async createUser(body: Record<string, any>) {
    try {
      console.log('body');
      // body['code']=this._common_service.generateCode('USR')
      await this.userRepository.save(body)
      return {
        message:'Created successfully.',
        status:HttpStatus.OK
      }

    } catch (error) {}
  }
}


