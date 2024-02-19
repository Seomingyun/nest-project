import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// 이 3가지는 모두 데코레이터

@Entity()
export class User {
  // UserEntity 이런 이름 X
  // 사용자들이 갖게 될 특성 나열
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
