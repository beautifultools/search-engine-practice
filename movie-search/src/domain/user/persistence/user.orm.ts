import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('USER')
class UserEntity {
  @PrimaryGeneratedColumn({name:'ACCOUNT_NO'})
  accountNo: number;

  @Column({name:'EMAIL'})
  email: string;

  @Column({name:'PASSWORD'})
  password: string;

  @Column({name:'NAME'})
  name: string;

  @Column({name:'FAV_DIRECTOR'})
  favDirector: string;

  @Column({name:'FAV_ACTOR'})
  favActor: string;

  @Column({name:'FAV_GENRE'})
  favGenre: string;

  @CreateDateColumn({name:'REG_DATE'})
  regDate: Date;

  @UpdateDateColumn({name:'MOD_DATE'})
  modDate: Date;
}

export { UserEntity };
