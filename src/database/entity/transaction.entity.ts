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

  @Entity("Transactions")
  class Transactions {
  
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    targetCountry: string;
  
    @Column()
    comission: number;
  
    @Column()
    source: string;
    
    @Column()
    target: string;
  
    @Column()
    valueSent: number;
  
    @Column()
    date: Date;
    
    @Column()
    status: string;
  
    @Column()
    reciptAccount: number;
  
    @Column()
    reciptEmail: string;
    
    @Column()
    reciptName: string;
  
    @Column()
    reciptNumber: string;
    
    @Column()
    userId: string;
                                 
  }
  
  export default Transactions;