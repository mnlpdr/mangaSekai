export class RegisterVendor {
    constructor(
        public email: string,
        public description: string,
        public password: string,
        public confirmPassword: string,
    ) { }
}