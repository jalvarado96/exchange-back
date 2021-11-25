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

  @Entity("Role")
  class Role {
  
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    isActive: boolean;                              
  }
  
  export default Role;