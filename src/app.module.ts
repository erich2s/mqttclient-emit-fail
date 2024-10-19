import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_SERVICE_V5',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          protocolVersion: 5, // specify the protocol version
        },
      },
    ]),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
