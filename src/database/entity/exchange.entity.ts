import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    JoinColumn,
    ManyToOne,
    OneToOne,
  } from "typeorm";

  @Entity("exchange")
  class Exchange {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'decimal'})
    comision: number;
  
    @Column({type: 'decimal'})
    finalValue: number;
  
    @Column()
    isActive: Boolean;
    
    @Column()
    sourceName: string;
  
    @Column()
    targetName: string;
  
    @Column()
    type: string;                              
  }
  
  export default Exchange;