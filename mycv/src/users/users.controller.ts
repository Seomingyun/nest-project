import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    // 검증이 필요 -> dto를 생성하고 그 안에 pipe를 설정해야 함
    console.log(body);
  }
}
