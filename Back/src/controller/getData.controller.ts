import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { GetDataService } from '../service/getData.service';

@Controller('/epitech')
export class GetDataController {
  constructor(private getDataService: GetDataService) {}
  @Post('/getdata')
  getData(@Req() req: Request) {
    const alert  = req.body["alert"];
    const message = req.body["message"];
    const user = req.body["user"];
    const date = req.body["date"];
    // console.log(alert);
    // console.log(message);
    // console.log(user);
    console.log(date);
    return this.getDataService.get();
  }
}
