import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttRecordBuilder } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MQTT_SERVICE_V5')
    private readonly mqttServiceV5: ClientProxy,
  ) {}

  sendMessage() {
    const data = new MqttRecordBuilder()
      .setData('Hello from MQTT 5.0 Client Proxy')
      // If we comment out this .setProperties(), the message won't be emitted
      .setProperties({ userProperties: { anyKey: 'anyValue' } })
      .setQoS(2)
      .build();
    this.mqttServiceV5.emit('chat', data);
  }

  sendMessageWithoutProperties() {
    const data = new MqttRecordBuilder()
      .setData('Hello from MQTT 5.0 Client Proxy (without properties)')
      .setQoS(2)
      .build();
    this.mqttServiceV5.emit('chat', data);
  }

  onModuleInit() {
    setInterval(() => {
      this.sendMessage();
      this.sendMessageWithoutProperties();
    }, 1000);
  }
}
