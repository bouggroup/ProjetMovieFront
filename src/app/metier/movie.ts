export class Movie {

    constructor(
        public id: number,
        public title: string,
        public duration: number,
        public genres: string,
        public Poster: string
    ) {}

    public static emptyMovie(): Movie {
        return new Movie( 0, '', 0,  '', '');
        }
}
