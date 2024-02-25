import { Expose } from 'class-transformer';

export class UserDto {
  @Expose() // 이 속성을 공유하라는 의미
  id: number;

  @Expose()
  email: string;
}
