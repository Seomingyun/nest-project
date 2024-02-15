import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// src/main.ts
// 모든 nest 프로젝트에서 맨 처음 실행되는 파일
// 보통 app을 시작하고 특정한 port에서 트래픽을 리스닝하기 시작하는 코드를 여기에 작성

// 애플리케이션이 시작될 때마다 실행될 함수를 추가
// 보통은 이 함수를 bootstrap이라고 부름
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 새로운 Nest Application 생성

  await app.listen(3000); // 3000 port를 listening
}

bootstrap();

// 프로젝트 시작 명령어; npx ts-node-dev src/main.ts
