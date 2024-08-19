import { getDataAsync, storeDataAsync } from "./asyncStorage"

const getTasksAsync = async () => {
    return await getDataAsync('Tasks')
}

const storeTasksAsync = async tasks => {
    return storeDataAsync('Tasks', tasks)
}

export {
    getTasksAsync,
    storeTasksAsync,
}