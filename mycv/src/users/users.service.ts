import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {
    // InjectRepository(User) => 의존성 주입 시스템에 사용자 리포지토리가 필요하다고 알려줌
    // 의존성 주입 시스템은 제네릭 타입을 잘 접근 못함 -> User 를 같이 넘겨줌
  }

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    // repo.create -> 새로운 user 엔터티 생성 후 인스턴스 할당
    // repo.save -> 위에서 만들어진 인스턴스 유지(저장
    return this.repo.save(user);

    // 사실, this.repo.save({ email, passwork });
    // 해도 똑같이 유저 인스턴스가 저장됨
    // 그럼 왜 line;14처럼 인스턴스를 만들고 진행할까 ?
    // user.entity.ts에도 검증 로직을 추가할 수 있음 -> dto에서 하는 거 말고 여기서도 할 수 있다는 뜻
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    return this.repo.find({ where: { email } }); // 못찾으면 빈 배열 반환
  }

  async update(id: number, attrs: Partial<User>) {
    // Partial 키워드: attrs가 User class의 일부만 갖고 있는 객체가 가능하게 됨
    const user = await this.findOne(id);
    if (!user) {
      // throw new Error('user not found');

      // 이런식으로 일반 에러 객체를 던지는 것은 좋지 않음 -> Nest가 캐치할 수 있는 정보가 없음
      // 그럼 Nest에서 정의하는 오류들을 던져주자!
      // 근데, 이렇게 service에서 오류를 던져주는 것도 좋지 않긴 함(http에 특화된 에러이므로)
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs); // 찾아낸 사용자에 우리가 변겨하고자 하는 업데이트 내용이 들어간 객체를 직접 복사
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
