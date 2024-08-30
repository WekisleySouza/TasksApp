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

function darkenColor(color, amount) {
    let usePound = false;
  
    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }
  
    const num = parseInt(color, 16);
  
    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00FF) - amount;
    let b = (num & 0x0000FF) - amount;
  
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;
  
    return (usePound ? "#" : "") + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

function desaturateColor(color, amount) {
    let usePound = false;
  
    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }
  
    const num = parseInt(color, 16);
  
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
  
    r = r > 255 ? 255 : r;
    g = g > 255 ? 255 : g;
    b = b > 255 ? 255 : b;
  
    return (usePound ? "#" : "") + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

export {
    dateToStringHour,
    dateToStringDate,
    darkenColor,
    desaturateColor
}