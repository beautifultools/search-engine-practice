import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name:"MOVIE"})
class Movie {
  @PrimaryGeneratedColumn({name:"MOVIE_NO"})
  movieNo: number;

  @Column({name:"TITLE"})
  title:string;

  @Column({name:"GENRE"})
  genre:string;

  @Column({name:"TYPE"})
  type:string;

  @Column({name:"COUNTRY"})
  country:string;

  @Column({name:"DIRECTOR"})
  director:string;

  @Column({name:"OPEN_DATE"})
  openDate: Date;

  @CreateDateColumn({ name:"REG_DATE"})
  regDate: Date;

  @UpdateDateColumn({ name:"MOD_DATE"})
  modDate: Date;
}

export {Movie}
