import { Module } from '@nestjs/common';
import { GetDataController } from './getData.controller';

@Module({
  controllers: [GetDataController],
})
export class UserModule {}
