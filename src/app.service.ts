import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    private readonly connection: Connection
    ) {
  }
  async getHello():Promise<Record<string, any>> {
    try {
      const data = await this.connection
        .collection('startup_log')
        .find()
        .toArray();
      return {
        data: data,
      };
    } catch {}
  }
}
