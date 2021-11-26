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
        type: 'number',
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
        type: 'number',
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
        type: 'number',
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