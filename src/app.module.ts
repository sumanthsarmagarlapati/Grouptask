import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from './configuration/config.module';
import { MiddleWare } from './Middleware/middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/local'),AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddleWare).forRoutes('*')
  }
}
