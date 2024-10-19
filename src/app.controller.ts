import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('chat')
  async handleMessage(@Payload() data: any) {
    console.log(data);
  }
}
