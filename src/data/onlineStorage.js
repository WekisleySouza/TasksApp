import axios from "axios"
import { server } from "./backend_connection"

const getTasksOnline = async () => {
    try{
        const res = await axios.get(`${server}/tasks`)
        return res.data
    }catch (error){
        return false
    }
}

const saveTaskOnline = async task => {
    try{
        const res = await axios.post(`${server}/tasks`, {
            title: task.title,
            description: task.description,
            toDoDate: task.toDoDate,
            duration: task.duration,
            doneDate: task.doneDate,
        })
        return res.data.id
    }catch (error){
        return false
    }
}

const removeTaskOnline = async id => {
    try{
        await axios.delete(`${server}/tasks/${id}`)
        return true
    }catch (error){
        return false
    }
}

const updateTaskOnline = async task => {
    
    try{
        await axios.put(`${server}/tasks/${task.id}`, {
            title: task.title,
            description: task.description,
            toDoDate: task.toDoDate,
            duration: task.duration,
            doneDate: task.doneDate,
        })
        return true
    }catch (error){
        return false
    }
}

const toggleTaskOnline = async task => {
    try{
        await axios.put(`${server}/tasks/${task.id}/toggle`)
        return true
    }catch (error){
        return false
    }
}

export {
    getTasksOnline,
    saveTaskOnline,
    removeTaskOnline,
    updateTaskOnline,
    toggleTaskOnline,
}