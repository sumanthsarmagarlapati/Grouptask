import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config_module = app.get(ConfigService);
  const port = config_module.get<number>('PORT') || 2001;
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port); // no evrthing clear >> ok bro thnak u bye bye
  
}
bootstrap();
