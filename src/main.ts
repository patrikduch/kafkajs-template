import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Kafkajs template")
    .setDescription("Example of KafkaJs library for communication with Kafka Message Broker.")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);
  
  const configureService = app.get(ConfigService);
  const port = configureService.get('PORT');
  await app.listen(port);
}
bootstrap();
