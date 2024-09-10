import axios from "axios"
import { showError } from '../functions/aux'
import { server } from "./backend_connection"

const signin = async (email, password) => {
    try{
        const res = await axios.post(`${server}/signin`, {
            email,
            password
        })
        axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

        return true
    } catch (e){
        console.log(e)
        showError('Erro ao fazer login!')
        return false
    }
}

const signup = async (name, email, password) => {
    try{
        await axios.post(`${server}/signup`, {
            name,
            email,
            password
        })
        return true
    } catch (e){
        showError('Erro ao criar conta!')
        return false
    }
}

export {
    signin,
    signup
}