import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class MiddleWare implements NestMiddleware {
  use(req: any, res: any, next:NextFunction) {
    console.log("Request recived",req.url);
    next();
  }
}
