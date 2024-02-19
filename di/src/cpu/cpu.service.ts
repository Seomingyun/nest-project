import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    // compute method: 전력을 사용할 수 있도록 함
    console.log('Drowing 10 watts of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
