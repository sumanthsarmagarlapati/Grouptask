import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {

  constructor(@InjectConnection() private readonly connection: Connection) {
  // 'cats' is the name of the default collection
  }
  async getHello() {
    // return 'Hello World!';
    try{

      const data = await this.connection.collection('startup_log').find().toArray(); 
      return {
        data:data
      }
    }catch{

    }
  }
}
