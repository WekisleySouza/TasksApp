export default class Task{
    constructor(title = '', description = '', toDoDate = '', duration = 0, doneDate = ''){
        this._title = title
        this._description = description
        this._toDoDate = typeof(toDoDate) == 'string' ? toDoDate : toDoDate.toISOString()
        this._duration = duration
        this._doneDate = typeof(doneDate) == 'string' ? doneDate : doneDate.toISOString()
    }

    set taskObject(object){
        this._title = object.title
        this._description = object.description
        this._toDoDate = typeof(object.toDoDate) == 'string' ? object.toDoDate : object.toDoDate.toISOString()
        this._duration = object.duration
        this._doneDate = typeof(object.doneDate) == 'string' ? object.doneDate : object.doneDate.toISOString()
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

    isEqualsTo = (task) => {
        return (
            this._title === task.title &&
            this._description === task.description &&
            this._toDoDate === task.toDoDate &&
            this._duration === task.duration &&
            this._doneDate === task.doneDate
        )
    }

    get isEmpty(){
        return this.title == ''
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
        this._doneDate = date.toISOString()
    }

    get toDoDate(){
        return this._toDoDate.length > 0 ? new Date(this._toDoDate) : new Date()
    }
    
    set toDoDate(date){
        this._toDoDate = date.toISOString()
    }
}