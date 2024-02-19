import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], // power module에서 export한 서비스에 액세스 할 수 있게 됨
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
