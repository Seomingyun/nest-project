import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 들어오는 요청 중 본문에 우리가 예상하지 못하는 무관한 속성은 넣지 않았는지 확인 -> 다른 속성들은 그냥 무시함
    }),
  );
  await app.listen(3000);
}
bootstrap();
