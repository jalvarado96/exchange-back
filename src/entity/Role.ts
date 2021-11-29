import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './User';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    name: 'name',
    unique: true
  })
  name: string;

  @Column({
    type: 'text',
    name: 'description'
  })
  description: string;

  @Column({
    name: 'isActive'
  })
  isActive: boolean;

  @OneToMany(() => User, user => user.role)
  users: User[]

}
