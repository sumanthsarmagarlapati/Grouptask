import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config_module = app.get(ConfigService);
  const port = config_module.get<number>('PORT') || 2001;
  console.log('port', port);

  await app.listen(port);
}
bootstrap();
