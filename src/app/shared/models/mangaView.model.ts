export class MangaView {
    constructor(
        public id: string,
        public name: string,
        public chapter: number,
        public price: number,
        public description: string,
        public author: string,
        public genre: string,
        public publication: string,
        public image: string,
        public vendor: string,
    ) {}
}
