import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  async generateCode(code_prefix: string) {
    try {
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;

      // Concatenate the prefix and the random number to form the code
      const code = `${code_prefix}-${randomNumber}`;

      return code;
    } catch (error) {}
  }
}
