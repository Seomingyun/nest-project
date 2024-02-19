import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    // watts: 다른 서비스들이 공급해달라고 요청하는 전력량
    console.log(`Supplying ${watts} worth of power.`);
  }
}
