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

function checkProjectName(name){
    if(!name){
        return{
            status: false,
            errorMsg: "Blank value"
        }
    }
    let projects = getProjects();
    for(let project of projects){
        if(project.name.toLowerCase() == name.toLowerCase()){
            return{
                status : false,
                errorMsg: "A project with this name already exists!"
            };
        }
    }
    if(name.length < 3 || name.length > 30){
        return{
            status: false,
            errorMsg: "Project title length must be between 3 and 30",
        };
    }
    return{
        status: true
    };
}





export {Project, getProjects, setProjects, checkProjectName};