export default class User{
    constructor(name = "", email = "", password = "") {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get encryptedPassword(){
        return this.password
    }
}