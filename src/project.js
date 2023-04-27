function Project(name){
    this.name = name;
    this.todos = [];
    this.addToDo = (todo) => {
        this.todos.push(todo);
    }
}

export {Project};