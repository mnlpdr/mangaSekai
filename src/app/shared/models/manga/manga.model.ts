export class Manga {
  constructor(public name: string, public chapter: number, public price: number,
              public description: string, public author: string, public genre: string,
              public publication: string, public image:string, public id?: string) {
  }
}



/*
export interface Manga {
  name: string;
  chapter: number;
  description: string;
  author: string;
  genre: string;
  publication: string;
}

 */
