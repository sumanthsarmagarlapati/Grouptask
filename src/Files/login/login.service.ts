import {
  HttpStatus,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonService } from 'src/common/common-service';
import { CreateUserDto, UserLoginDto } from './dto/login-dto';
import { NotFoundError } from 'rxjs';
import { UserModel } from './schema/login-schema';
@Injectable()
export class UserService {
  constructor(
    private _common_service: CommonService,

    @InjectModel('user')
    private readonly userRepository: Model<UserModel>,
  ) {}

  async createUser(body: CreateUserDto) {
    try {
      console.log('body',body);
      const user = await this.userRepository.findOne({
        username: body['username'],
      });
      if (user) {
        throw new NotAcceptableException(
          `User with name ${body['username']} already exist!`,
        );
      }
      body['code'] =await this._common_service.generateCode('USR');
      console.log("body before",body);
      
      await this.userRepository.create(body);
      return {
        message: 'Created successfully.',
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      console.log("in error service",error);
      
      return {
        status: HttpStatus.BAD_REQUEST,
        message: error,
      };
    }
  }

  async userLogin(body: UserLoginDto) {
    try {
      const user = await this.userRepository.findOne({
        username: body['username'],
      });
      console.log(user, 'user');

      if (!user) {
        throw new NotFoundException(
          `User with name ${body['username']} not exist!`,
        );
      }
      if (
        user['username'] === body['username'] &&
        user['password'] === body['password']
      ) {
        return {
          status: HttpStatus.OK,
          message: 'Login user successfully.',
        };
      }else{
        throw new NotFoundException(
          `Invalid credentials!`,
        );
      }
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: error.response.message,
      };
    }
  }
}
