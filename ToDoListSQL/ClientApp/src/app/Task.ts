export class Task {
    id : number; 
    taskName : string;
    isCompleted : boolean

    constructor(id : number, taskName: string, isCompleted: boolean){
        this.id = id;
        this.taskName = taskName;
        this.isCompleted = isCompleted;
    }
}