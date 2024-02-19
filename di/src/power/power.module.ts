import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // 다른 모듈에서도 이 서비스를 사용할 것임을 알려줌
})
export class PowerModule {}
