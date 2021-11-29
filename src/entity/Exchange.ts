import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exchange')
export class Exchange {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'float4',
        name: 'comission'
    })
    comission: number;

    @Column({
        type: 'float4',
        name: 'finalValue'
    })
    finalValue: number;

    @Column({
        name: 'isActive'
    })
    isActive: boolean;

    @Column({
        type: 'text',
        name: 'sourceName'
    })
    sourceName: string;

    @Column({
        type: 'text',
        name: 'targetName'
    })
    targetName: string;

    @Column({
        name: 'type'
    })
    type: string;
}
