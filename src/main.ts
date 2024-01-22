import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config_module = app.get(ConfigService);
  const port = config_module.get<number>('PORT') || 2001;
  await app.listen(port);
  app.enableCors({
    origin: 'http://0.0.0.0:4200', // Replace with your Angular app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
