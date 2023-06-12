export class MangaViewFirestore {

    id?: string;
    name?: string;
    chapter?: number;
    price?: number;
    description?: string;
    author?: string;
    genre?: string;
    publication?: string;
    image?: string;
    vendor?: string;
    constructor(id?: string,mangaView: MangaViewFirestore = {}) {
        this.id = id;
        this.name = mangaView.name;
        this.chapter = mangaView.chapter;
        this.price = mangaView.price;
        this.description = mangaView.description;
        this.author = mangaView.author;
        this.genre = mangaView.genre;
        this.publication = mangaView.publication;
        this.image = mangaView.image;
        this.vendor = mangaView.vendor;
    }
}
