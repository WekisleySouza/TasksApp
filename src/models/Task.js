export default class Task{
    constructor(title = '', description = '', createdAt = new Date(), doneAt = ''){
        self.title = title
        self.description = description
        self.createdAt = createdAt
        self.doneAt = doneAt
    }
}