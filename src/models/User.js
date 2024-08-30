export default class User{
    constructor(name = "", email = "", password = "a") {
        this.islogged = false;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get userToSlice(){
        return {
            name: this.name,
            email: this.email,
            password: this.password
        }
    }

    get encryptedPassword(){
        return this.password
    }
}