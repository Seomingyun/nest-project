import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // 원한다면 하나의 라우터에 대해서도 pipe를 설정할 수 있음
  // 여기서는 애플리케이션에 유입되는 모든 요청을 검증
  app.useGlobalPipes(
    // 특정한 handler에 검증 규칙을 추가하지 않으면
    // 해당 handler에 대해서는 pipe 작동 X
    new ValidationPipe(),
  );
  await app.listen(3000);
}
bootstrap();
