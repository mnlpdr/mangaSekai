import { MangaViewFirestore } from "./registerProductFirestore";

export class ClientFirestore {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    shoppingCart?: Array<MangaViewFirestore>;
    checkout?: Array<MangaViewFirestore>;
    constructor(id?: string, client: ClientFirestore = {}) {
        this.id = id;
        this.name = client.name;
        this.email = client.email;
        this.password = client.password;
        this.shoppingCart = client.shoppingCart;
        this.checkout = client.checkout;
    }
}