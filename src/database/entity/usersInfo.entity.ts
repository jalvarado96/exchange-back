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

  @Entity("usersInfo")
  class UserInfo {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    address: string;
  
    @Column()
    city: string;
    
    @Column()
    state: string;
  
    @Column()
    birthDate: Date;
  
    @Column()
    phoneNumber: string;
    
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    selfie: string;
    
    @Column()
    dniFront: string;
  
    @Column()
    dniBack: string;
    
    @Column()
    documentDate: Date;
  
    @Column()
    documentType: string;
  
    @Column()
    documentNumber: string;
    
    @Column()
    role: number;
  
    @Column()
    recoverHash: string;
                                 
  }
  
  export default UserInfo;
  