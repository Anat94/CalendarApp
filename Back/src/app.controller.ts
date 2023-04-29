import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/:userId')
  getUser(@Param() userId: number) {
    return userId;
  }
  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
}
