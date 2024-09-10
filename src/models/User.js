export default class User{
    constructor(name = "Wekisley", email = "wekis@gmail.com", password = "998010") {
        this.isLogged = false;
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