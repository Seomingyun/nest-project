import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// Body : 인수 데코레이터
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages') // class 데코레이터 -> class 전체에 적용하고 있음
export class MessagesController {
  // 라우터 핸들러 역할을 할 메소드들 구현

  @Get() // method 데코레이터 -> method 전체에 적용됨
  listMessges() {}

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    // body -> 요청에서 자동으로 Body 부분을 추출해서 body parmas에 넣어줌
    console.log(body);

    // ../main.ts에서 pipe 설정을 진행
    // 해당 post 요청마다 검증 규칙을 사용할 수 있게 하기 위해 규칙 설정이 필요함
    // => CreateMessageDto에 존재
  }

  @Get('/:id') // Nest를 사용할 때 유입되는 요청에서 정보를 추출하기 위해 데코레이터를 사용할 수 있음
  getMessge(@Param('id') id: string) {
    console.log(id);
  }
}
