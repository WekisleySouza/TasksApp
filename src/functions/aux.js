const dateToStringHour = (date) => {
    try {
        const hours = (date.getHours() > 0)? date.getHours() : '00'
        const minutes = (date.getMinutes() > 0)? date.getMinutes() : '00'
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

export {
    dateToStringHour,
    dateToStringDate
}