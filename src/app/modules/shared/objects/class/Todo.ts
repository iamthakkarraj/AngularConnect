export class Todo{

    userId: number;
    id: number;    
    completed: boolean;

    constructor(
        public title: string
    ){
        this.completed = false;
    }
}