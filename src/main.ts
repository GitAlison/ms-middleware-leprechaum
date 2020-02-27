import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mqtt = require('mqtt')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  mqtt.connect('mqtt://test.mosquitto.org')
  await app.listen(3000);
}
bootstrap();
