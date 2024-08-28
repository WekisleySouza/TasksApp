export default class Task{
    constructor(title = '', description = '', toDoDate = '', duration = 0, doneDate = ''){
        this._title = title
        this.description = description
        this._toDoDate = toDoDate
        this.duration = duration
        this.doneDate = doneDate
    }

    get taskToSlice(){
        return {
            title: this.title,
            description: this.description,
            toDoDate: this._toDoDate,
            duration: this.duration,
            doneDate: this.doneDate,
        }
    }
    
    get title(){
        return this._title
    }

    set title(title){
        this._title = title
    }

    get description(){
        return this._description
    }

    set description(description){
        this._description = description
    }

    get toDoDate(){
        return this._toDoDate.length > 0 ? new Date(this._toDoDate) : new Date()
    }
    
    set toDoDate(date){
        this._toDoDate = date.toUTCString()
    }
}