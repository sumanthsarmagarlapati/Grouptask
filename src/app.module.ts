import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'mongoose';
import { LoginModule } from './Files/login/login.module';
import { MiddleWare } from './Middleware/middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './configuration/config.module';
import { ConfigService } from './configuration/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.MONGO_CONFIG,
      inject: [ConfigService],
    }),
    AppConfigModule,
    LoginModule,
    Connection
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddleWare).forRoutes('*');
  }
}
