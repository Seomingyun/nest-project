import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  // 라우터 핸들러 역할을 할 메소드들 구현

  @Get()
  listMessges() {}

  @Post()
  createMessges() {}

  @Get('/:id') // Nest를 사용할 때 유입되는 요청에서 정보를 추출하기 위해 데코레이터를 사용할 수 있음
  getMessge() {}
}
