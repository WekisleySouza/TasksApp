const dateToStringHour = (date) => {
    const minutes = (date.getMinutes() > 0)? date.getMinutes() : '00'
    return `${date.getHours()}:${minutes}`
}


export {
    dateToStringHour,
}