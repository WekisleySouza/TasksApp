export default class User{
    constructor(name = "", email = "", password = "") {
        this.name = name;
        this.email = email;
        this.token = null;
        this.password = password;
    }

    get userToSlice(){
        return {
            name: this.name,
            email: this.email,
            token: this.token,
            password: this.password
        }
    }

    get encryptedPassword(){
        return this.password
    }
}