import { makeActiveProject, toggleAddProjectClickableEvent, giveDeleteProjectBtnsFunctionality, addListenersForActiveProject } from "./clickables";
import "./style.css"
import { getProjects, setProjects } from "./project";

function loadProjects(projects, index){
    let unorderedList = document.querySelector(".projects");
    unorderedList.innerHTML = "";
    for(let i = 0; i < projects.length; i++){
        let listItem = document.createElement("li");
        listItem.dataset.id = i;
        let div = document.createElement("div");
        div.classList.add("project-list-titles");
        div.textContent = projects[i].name;
        listItem.append(div);
        if(i != 0){
            let span = document.createElement("span");
            span.classList.add("material-symbols-outlined", "delete-project-btn");
            span.textContent = "delete";
            span.dataset.id = i;
            listItem.append(span);
        }
        unorderedList.appendChild(listItem);
    }
    makeActiveProject(index);
    addListenersForActiveProject();
    giveDeleteProjectBtnsFunctionality();
    toggleAddProjectClickableEvent();
    
}

function loadProject(index){
    let projects = getProjects();
    let titleBar = document.querySelector('.project-title');
    titleBar.textContent = projects[index].name;
    loadTasks(index);
}

function loadTasks(index){
    let thisProject = getProjects()[index];
    let toDos = thisProject.todos;;
    let unorderedList = document.querySelector('.task-list');
    unorderedList.innerHTML = "";
    for(let i = 0; i < toDos.length; i++){
        let curr = toDos[i];
        let listItem = document.createElement("li");
        listItem.dataset.id = i;
        listItem.classList.add("task");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("first");
        let taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.textContent = curr.name;
        let dueDate = document.createElement("div");
        dueDate.classList.add("due-date");
        dueDate.textContent = curr.dueDate;
        let span = document.createElement("span");
        span.classList.add("material-symbols-outlined" , "delete");
        span.textContent = "delete";
        listItem.append(checkbox, taskName, dueDate, span);
        unorderedList.append(listItem);
    }
}

export {loadProjects, loadTasks, loadProject};