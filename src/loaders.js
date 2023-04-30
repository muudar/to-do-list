import {deleteTask ,makeProjectTitleEditable, makeActiveProject, toggleAddProjectClickableEvent, giveDeleteProjectBtnsFunctionality, addListenersForActiveProject, triggerTask } from "./clickables";
import "./style.css"
import { getProjects, setProjects } from "./project";
import {addTask, checkTaskValues, getAddTaskValues} from "./todo";

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
    makeProjectTitleEditable();
}

function loadProject(index){
    let projects = getProjects();
    let titleBar = document.querySelector('.project-title');
    titleBar.classList.remove("hidden");
    let projectTitleForm = document.querySelector(".edit-project-form");
    projectTitleForm.style.display = "none";
    projectTitleForm.classList.add("hidden");
    titleBar.dataset.id = index;
    titleBar.textContent = projects[index].name;
    loadTasks(index);
}

function loadTasks(index){
    let addTaskBtn = document.querySelector(".add-task");
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      span.onclick = function() {
        modal.style.display = "none";
      }
    addTaskBtn.onclick = function(){
        modal.style.display = "block";
        document.querySelector("#addTaskTitle").value = "";
        document.querySelector("#addTaskDueDate").value = "";
        document.querySelector("#addTaskDescription").value = "";
    }
    document.querySelector("#addTaskButton").onclick = () =>{
        if(checkTaskValues().status == false){
            alert(checkTaskValues().errorMsg);
        }
        else{
            addTask(index);
            modal.style.display = "none";
            loadProject(index);
        }
    }
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
        if(curr.done){
            taskName.classList.add("done");
            checkbox.checked = true;
        }
        let dueDate = document.createElement("div");
        dueDate.classList.add("due-date");
        dueDate.textContent = curr.dueDate;
        let span = document.createElement("span");
        span.classList.add("material-symbols-outlined" , "delete");
        span.dataset.id = i;
        span.onclick = function(){
            deleteTask(index, span.dataset.id);
            loadProject(index);
        }
        checkbox.onclick = function(){
            triggerTask(index, span.dataset.id, checkbox);
            loadProject(index);
        }
        span.textContent = "delete";
        listItem.append(checkbox, taskName, dueDate, span);
        unorderedList.append(listItem);
    }
}

export {loadProjects, loadTasks, loadProject};