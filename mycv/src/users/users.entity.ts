import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
// 이 3가지는 모두 데코레이터

// import { Exclude } from 'class-transformer';

@Entity()
export class User {
  // UserEntity 이런 이름 X
  // 사용자들이 갖게 될 특성 나열
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // @Exclude() // 사용자 인스턴스를 가지고 와서 일반 객체로 바꿀 때, 이 속성은 제외가 됨
  password: string;

  @AfterInsert()
  logInsert() {
    // 이렇게 entity에서도 logic을 추가할 수 있음
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
