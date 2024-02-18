import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository; // type을 알려줘야 함

  constructor() {
    // 여기서는 repo class 인스턴스를 생성해 자체적인 의존성을 생성하고 있음
    // 즉 repository가 없으면 이 service는 잘 작동할 수 없음음
    // Nest에서는 이렇게 작성하지 않음 -> 의존성 주입이라는 특수한 시스템을 사용
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository(); //Todo 나중에 의존성 주입 시스템으로 수정될 것
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
