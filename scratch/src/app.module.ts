import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  controllers: [AppController], // controller list를 나열
}) // module decorator를 사용할 때엔 설정 객체를 넣어줘야 함
export class AppModule {
  // application이 시작될 때마다 Nest는 이 AppModule을 확인하고
  // 속성에 나열된 모든 컨트롤러를 검색
  // 그리고 모든 컨트롤러 클래스의 인스턴스를 자동으로 생성
  // 이후 우리가 사용한 모든 데코레이터를 살펴보고
  // 우리가 사용한 데코레이터에 대해 라우트 핸들러를 설정
}
