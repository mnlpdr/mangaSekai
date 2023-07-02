export class RegisterVendor {
    constructor(
        public name: string,
        public email: string,
        public description: string,
        public password: string,
        public confirmPassword: string,
    ) { }
}