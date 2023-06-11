import { MangaView } from "../mangaView.model";

export class VendorFirestore {
    email?: string;
    description?: string;
    password?: string;
    name?: string;
    products?: Array<string>;
    sold?: Array<MangaView>;
    id?: string;
    constructor(id?:string, vendor: VendorFirestore = {}) {
        this.email = vendor.email;
        this.description = vendor.description;
        this.password = vendor.password;
        this.name = vendor.name;
        this.products = vendor.products;
        this.sold = vendor.sold;
        this.id = id;
    }
}