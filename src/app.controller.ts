import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/curso')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bsms')
  getBSMS(): string {
    return this.appService.getBSMS();
  }
  @Get('/objetivo')
  getObjetivo(): string {
    return this.appService.getObjetivo();
  }
}
