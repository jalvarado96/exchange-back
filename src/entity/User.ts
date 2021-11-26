import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
    name: 'adress'
  })
  adress: string;

  @Column({
    name: 'city'
  })
  city: string;

  @Column({
    name: 'state'
  })
  state: string;

  @Column({
    type: 'date',
    name: 'birthdate'
  })
  birthdate: string;

  @Column({
    name: 'phonenumber'
  })
  phonenumber: string;

  @Column({
    name: 'username'
  })
  username: string;

  @Column({
    name: 'lastname'
  })
  lastname: string;

  @Column({
    name: 'selfie'
  })
  selfie: string;

  @Column({
    name: 'dniFront'
  })
  dniFront: string;

  @Column({
    name: 'dniBack'
  })
  dniBack: string;

  @Column({
    type: 'date',
    name: 'documentDate'
  })
  documentDate: string;

  @Column({
    name: 'documentType'
  })
  documentType: string;

  @Column({
    name: 'documentNumber'
  })
  documentNumber: string;

  @Column({
    type: 'number',
    name: 'role'
  })
  role: number;

  @Column({
    name: 'recoverHash'
  })
  recoverHash: string;
}
