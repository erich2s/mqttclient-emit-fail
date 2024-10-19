import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        protocolVersion: 5, // specify the protocol version
        url: 'mqtt://localhost:1883',
      },
    },
  );
  await app.listen();
}
bootstrap();
