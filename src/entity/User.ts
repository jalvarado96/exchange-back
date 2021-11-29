import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Role } from './Role';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'email'
  })
  email: string;

  @Column({
    name: 'password'
  })
  password: string;

  @Column({
    name: 'adress',
    nullable: true
  })
  adress: string;

  @Column({
    name: 'city',
    nullable: true
  })
  city: string;

  @Column({
    name: 'state',
    nullable: true
  })
  state: string;

  @Column({
    type: 'date',
    name: 'birthdate',
    nullable: true
  })
  birthdate: string;

  @Column({
    name: 'phonenumber',
    nullable: true
  })
  phonenumber: string;

  @Column({
    name: 'username',
    nullable: true
  })
  username: string;

  @Column({
    name: 'lastname',
    nullable: true
  })
  lastname: string;

  @Column({
    name: 'selfie',
    nullable: true
  })
  selfie: string;

  @Column({
    name: 'dniFront',
    nullable: true
  })
  dniFront: string;

  @Column({
    name: 'dniBack',
    nullable: true
  })
  dniBack: string;

  @Column({
    type: 'date',
    name: 'documentDate',
    nullable: true
  })
  documentDate: string;

  @Column({
    name: 'documentType',
    nullable: true
  })
  documentType: string;

  @Column({
    name: 'documentNumber',
    nullable: true
  })
  documentNumber: string;

  @ManyToOne(() => Role, role => role.users)
  role: Role;

  @Column({
    name: 'recoverHash',
    nullable: true
  })
  recoverHash: string;
}
