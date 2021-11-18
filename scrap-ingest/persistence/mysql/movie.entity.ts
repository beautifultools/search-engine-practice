import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name:"MOVIE"})
export class MovieEntity {
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

// movieCd: '20196264',
//     movieNm: '유체이탈자',
//     movieNmEn: 'Spiritwalker',
//     prdtYear: '2020',
//     openDt: '20211124',
//     typeNm: '장편',
//     prdtStatNm: '개봉예정',
//     nationAlt: '한국',
//     genreAlt: '판타지,액션',
//     repNationNm: '한국',
//     repGenreNm: '판타지',
//     directors: [ { peopleNm: '윤재근' } ],
//     companys: [
//     { companyCd: '20138935', companyNm: '(주)비에이엔터테인먼트' },
//     { companyCd: '20122494', companyNm: '(주)사람엔터테인먼트' }
// ]
