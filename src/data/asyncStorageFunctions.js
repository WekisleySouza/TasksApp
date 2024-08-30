import { getDataAsync, storeDataAsync } from "./asyncStorage"

const getTasksAsync = async () => {
    return await getDataAsync('Tasks')
}

const storeTasksAsync = async tasks => {
    return storeDataAsync('Tasks', tasks)
}

const getUserAsync = async () => {
    return await getDataAsync('User')
}

const storeUserAsync = async user => {
    return storeDataAsync('User', user)
}

export {
    getTasksAsync,
    storeTasksAsync,
    getUserAsync,
    storeUserAsync,
}