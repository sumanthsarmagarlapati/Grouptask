import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './Files/login/login.module';
import { MiddleWare } from './Middleware/middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './configuration/config.module';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: 'mongodb://0.0.0.0:27017/local',
          retryAttempts: 10,
        };
      },
    }),
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddleWare).forRoutes('*');
  }
}