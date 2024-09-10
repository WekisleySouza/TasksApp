import { Alert } from "react-native"

const dateToStringHour = (date) => {
    try {
        const hours = (date.getHours() > 9) ? date.getHours() : `0${date.getHours()}`
        const minutes = (date.getMinutes() > 9) ? date.getMinutes() : `0${date.getMinutes()}`
        return `${hours}:${minutes}`
    } catch (err) {
        return '--:--'
    }
}

const dateToStringDate = (date) => {
    try {
        let day = date.getDate()
        let month = date.getMonth() + 1
        const year = date.getFullYear()
    
        day = day < 10? `0${day}` : day
        month = month < 10? `0${month}` : month
    
        return `${day}/${month}/${year}`
    } catch (err) {
        return '--/--/--'
    }
}

const wait = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const showError = errorMessage => {
    Alert.alert('Erro', errorMessage)
}

export {
    dateToStringHour,
    dateToStringDate,
    wait,
    showError
}