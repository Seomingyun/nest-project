import { Controller, Get } from "@nestjs/common";

@Controller("/app") // 컨트롤러 역할을 할 클래스를 생성하려 한다고 nest에게 알려줌 -> 데코레이터
export class AppController {
  @Get("/asdf") // get HTTP 메서드를 갖고 유입되는 요청에 대응하는 라우터 핸들러임
  getRootRoute() {
    // root 경로에 대한 get 요청 처리
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
