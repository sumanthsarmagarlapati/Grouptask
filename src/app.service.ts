import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    // private readonly connection: Connection
  ) {
  }
  async getHello(): Promise<Record<string, any>> {
    try {
      // const data = await this.connection
      //   .collection('startup_log')
      //   .find()
      //   .toArray();
      return {
        data: {},
      };
    } catch { }
  }
}
