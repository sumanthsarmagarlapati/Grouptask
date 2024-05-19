import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './Files/login/login.module';
import { MiddleWare } from './Middleware/middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './configuration/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    // AppConfigModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sumanth',//sumanth
      password: 'Sumanth@12345',
      database: 'employees',
      entities: [], // Specify the entities to load
      synchronize: true, // Only for development, don't use in production
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {  
          uri: 'mongodb+srv://sumanth:Gsmgrl0908@sumanth.hoxsmsm.mongodb.net/test',
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
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddleWare).forRoutes('*');
  }
}