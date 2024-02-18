import { Inject, Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable() // 이 class를 DI 컨테이너에 등록하기 위해 표시
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    //! deprecated
    // 여기서는 repo class 인스턴스를 생성해 자체적인 의존성을 생성하고 있음
    // 즉 repository가 없으면 이 service는 잘 작동할 수 없음음
    // Nest에서는 이렇게 작성하지 않음 -> 의존성 주입이라는 특수한 시스템을 사용
    // DONT DO THIS ON REAL APPS
    // this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    // async는 붙일 필요 없음
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
