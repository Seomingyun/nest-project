import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 이 단계에서 자동으로 repository가 생성됨
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
