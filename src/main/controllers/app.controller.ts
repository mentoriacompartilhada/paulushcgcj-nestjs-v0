import { Controller, Get } from '@nestjs/common';
import { AppService } from 'appservice/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
