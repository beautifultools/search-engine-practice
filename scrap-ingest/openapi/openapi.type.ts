/* Sample Request URL & Response Of Item
http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=1bc4fbe6c3765d12e90ceed78514cee1&openStartDt=2000&openEndDt=2021
{
    movieCd: '20196264',
    movieNm: '유체이탈자',
    movieNmEn: 'Spiritwalker',
    prdtYear: '2020',
    openDt: '20211124',
    typeNm: '장편',
    prdtStatNm: '개봉예정',
    nationAlt: '한국',
    genreAlt: '판타지,액션',
    repNationNm: '한국',
    repGenreNm: '판타지',
    directors: [ { peopleNm: '윤재근' } ],
    companys: [
    { companyCd: '20138935', companyNm: '(주)비에이엔터테인먼트' },
    { companyCd: '20122494', companyNm: '(주)사람엔터테인먼트' }
]
}*/

type OpenApiResponseData = {
    movieCd: string;
    movieNm: string;
    movieNmEn: string;
    prdtYear: string;
    openDt: string;
    typeNm: string;
    prdtStatNm: string;
    nationAlt: string;
    genreAlt: string;
    repNationNm: string;
    repGenreNm: string;
    directors: Array<DirectorInfo>
    companys: Array<CompanyInfo>
}

type DirectorInfo = {
    peopleNm: string;
}

type CompanyInfo = {
    companyCd: string;
    companyNm: string;
}

export {
    OpenApiResponseData
}
