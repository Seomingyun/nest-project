import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

interface ClassConstructor {
  // 기본적으로 모든 class는 이 조건을 만족함
  new (...args: any[]): {};
}

// 커스텀 데코레이터 : 내부적으로 데코레이터는 function
export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new serializeInterceptor(dto));
}

export class serializeInterceptor implements NestInterceptor {
  // implements
  // 추상 클래스나 인터페이스의 모든 조건을 만족하는 새로운 클래스를
  // 구현하고자 할 때 사용

  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    // Observable이나 Promise 타입을 반환해야 함

    // 리퀘스트 핸들러로 요청이 처리되기 전에 무언가 하고 싶다면 여기에 적어놓아야 함
    console.log('Im running before the handler', context);

    return next.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true, // userDto 인스턴스를 기본 json으로 변환하려고 할 때마다 Expose라고 쓰인 속성만 공유됨
        });
      }),
    );
  }
}
