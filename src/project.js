function Project(name){
    this.name = name;
    this.todos = [];
    this.addToDo = (todo) => {
        this.todos.push(todo);
    }
}

function getProjects(){
    return JSON.parse(localStorage.getItem('projects'));
}

function setProjects(projects){
    localStorage.setItem('projects', JSON.stringify(projects));
}
export {Project, getProjects, setProjects};