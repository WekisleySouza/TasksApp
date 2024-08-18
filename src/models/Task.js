export default class Task{
    constructor(id = 0, title = '', description = '', createdAt = '', doneAt = ''){
        self.title = title
        self.description = description
        self.createdAt = createdAt
        self.doneAt = doneAt
    }
}