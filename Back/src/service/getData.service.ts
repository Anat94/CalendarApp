import { Controller, Injectable } from '@nestjs/common';

@Controller({})
@Injectable()
export class GetDataService {
  get() {
    return { name: 'Uchechukwu Azubuko', country: 'Nigeria' };
  }
}
