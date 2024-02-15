import { IsString } from 'class-validator';
// isString 역시 하나의 데코레이터

export class CreateMessageDto {
  @IsString() // string인지 확인하는 데코레이터
  content: string; // 요청 hander로 유입되는 요청의 본문에 content라는 속성이 있고, 값은 string일거라고 예상 가능
}
