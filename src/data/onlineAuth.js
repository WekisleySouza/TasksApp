import axios from "axios"
import { showError } from '../functions/aux'
import { server } from "./backend_connection"

const signin = async (email, password) => {
    try{
        const res = await axios.post(`${server}/signin`, {
            email,
            password
        })
        setDefaultToken(res.data.token)

        return res.data
    } catch (e){
        showError('Impossível fazer login!')
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
        showError('Impossível criar conta!')
        return false
    }
}

const setDefaultToken = token => {
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
}

export {
    signin,
    signup,
    setDefaultToken,
}