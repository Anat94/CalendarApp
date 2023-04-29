import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetDataController } from './controller/getData.controller';
import { GetDataService } from './service/getData.service';

@Module({
  imports: [],
  controllers: [AppController, GetDataController],
  providers: [AppService, GetDataService],
})
export class AppModule {}
