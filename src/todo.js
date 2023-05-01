import { setProjects, getProjects } from "./project";
import moment from 'moment';

function ToDo(name, dueDate, description){
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
    this.done = false;
}

function getAddTaskValues(){
    let title = document.querySelector("#addTaskTitle").value;
    let dueDate = document.querySelector("#addTaskDueDate").value;
    let description = document.querySelector("#addTaskDescription").value;
    return {title, dueDate, description};
}

function addTask(projectID){
    let projects = getProjects();
    projects[projectID].todos.push(new ToDo(getAddTaskValues().title, getAddTaskValues().dueDate, getAddTaskValues().description));
    setProjects(projects);
}

function checkTaskValues(){
    let obj = getAddTaskValues();
    if(!obj.title || !obj.dueDate){
        return{
            status : false,
            errorMsg: "Task name and date cannot be blank"
        };
    }
    if(obj.title.length < 3 || obj.title.length > 30){
        return{
            status: false,
            errorMsg: "Task title length must be between 3 and 30"
        };
    }
    if(obj.description.length > 300){
        return{
            status: false,
            errorMsg: "Task description has a max of 300 characters"
        };
    }
    if(!moment(obj.dueDate, "YYYY-MM-DD" , true).isValid()){
        return{
            status: false,
            errorMsg: "Please enter a correct date",
        };
    }
    return{
        status: true
    };
}

function editTask(projectID, taskID){
    let values = getAddTaskValues();
    let projects = getProjects();
    let task = projects[projectID].todos[taskID];
    task.name = values.title;
    task.dueDate = values.dueDate;
    task.description = values.description;
    setProjects(projects);
;}

export {ToDo, getAddTaskValues, addTask, checkTaskValues, editTask};