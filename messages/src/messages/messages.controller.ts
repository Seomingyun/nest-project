import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
// Body : 인수 데코레이터
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') // class 데코레이터 -> class 전체에 적용하고 있음
export class MessagesController {
  // 라우터 핸들러 역할을 할 메소드들 구현

  messagesService: MessagesService;

  // DONT DO THIS ON REAL APP
  // USE DEPENDENCY INJECTION
  constructor() {
    this.messagesService = new MessagesService(); //Todo 나중에 의존성 주입 시스템으로 변경
  }

  @Get() // method 데코레이터 -> method 전체에 적용됨
  listMessges() {
    return this.messagesService.findAll(); // return 키워드를 사용하지 않으면, 사용자에게 아무것도 반환하지 않음
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    // body -> 요청에서 자동으로 Body 부분을 추출해서 body params에 넣어줌

    // ../main.ts에서 pipe 설정을 진행
    // 해당 post 요청마다 검증 규칙을 사용할 수 있게 하기 위해 규칙 설정이 필요함
    // => CreateMessageDto에 존재

    return this.messagesService.create(body.content);
  }

  @Get('/:id') // Nest를 사용할 때 유입되는 요청에서 정보를 추출하기 위해 데코레이터를 사용할 수 있음
  async getMessge(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    // 만약, 존재하지 않는 id를 요청한 경우 404 띄우기
    if (!message) {
      // NotFoundException이란?
      // Nest 자체 내부에 정의된 오류
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
