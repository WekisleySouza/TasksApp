export default class Task{
    constructor(title = '', description = '', toDoDate = '', duration = 0, doneDate = ''){
        this._title = title
        this._description = description
        this._toDoDate = toDoDate
        this._duration = duration
        this._doneDate = doneDate
    }

    get taskToSlice(){
        return {
            title: this._title,
            description: this._description,
            toDoDate: this._toDoDate,
            duration: this._duration,
            doneDate: this._doneDate,
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

    get duration(){
        return this._duration
    }

    set duration(duration){
        this._duration = duration
    }

    get doneDate(){
        return this._doneDate.length > 0 ? new Date(this._doneDate) : new Date()
    }
    
    set doneDate(date){
        this._doneDate = date.toUTCString()
    }

    get toDoDate(){
        return this._toDoDate.length > 0 ? new Date(this._toDoDate) : new Date()
    }
    
    set toDoDate(date){
        this._toDoDate = date.toUTCString()
    }
}