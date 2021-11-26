import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    name: 'name'
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
}
