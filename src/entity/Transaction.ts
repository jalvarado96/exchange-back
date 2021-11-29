import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transaction')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        name: 'targetCountry'
    })
    targetCountry: string;

    @Column({
        type: 'int',
        name: 'comission'
    })
    comission: number;

    @Column({
        type: 'text',
        name: 'source'
    })
    source: string;

    @Column({
        type: 'text',
        name: 'target'
    })
    target: string;

    @Column({
        type: 'int',
        name: 'valueSent'
    })
    valueSent: number;

    @Column({
        type: 'date',
        name: 'date'
    })
    date: string;

    @Column({
        type: 'text',
        name: 'status'
    })
    status: string;

    @Column({
        type: 'int',
        name: 'reciptAccount'
    })
    reciptAccount: number;

    @Column({
        type: 'text',
        name: 'reciptEmail'
    })
    reciptEmail: string;

    @Column({
        type: 'text',
        name: 'reciptName'
    })
    reciptName: string;

    @Column({
        type: 'text',
        name: 'reciptPhone'
    })
    reciptPhone: string;

    @Column({
        type: 'text',
        name: 'userId'
    })
    userId: string;
}