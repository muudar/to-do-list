import {deleteTask ,makeProjectTitleEditable, makeActiveProject, toggleAddProjectClickableEvent, giveDeleteProjectBtnsFunctionality, addListenersForActiveProject, triggerTask } from "./clickables";
import "./style.css"
import { getProjects, } from "./project";
import {addTask, checkTaskValues, editTask} from "./todo";

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
        document.querySelector(".add-task-headline").textContent = "Add a Task";
        document.querySelector("#addTaskButton").value = "Add Task";
        modal.style.display = "block";
        document.querySelector("#addTaskTitle").value = "";
        document.querySelector("#addTaskDueDate").value = "";
        document.querySelector("#addTaskDescription").value = "";
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
        let breakDiv = document.createElement("div");
        breakDiv.classList.add("break", "hover-task");
        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description-div", "hover-task");
        descriptionDiv.textContent = curr.description;
        descriptionDiv.style.display = "none";
        breakDiv.style.display = "none";
        if(curr.done){
            taskName.classList.add("done");
            descriptionDiv.classList.add("done");
            checkbox.checked = true;
        }
        listItem.onmouseover = function(){
            descriptionDiv.style["margin-left"] = "50px";
            descriptionDiv.style.display = "block";
            breakDiv.style.display = "block";
        }
        listItem.onmouseleave = function(){
            listItem.style.transition = "1s";
            descriptionDiv.style["margin-left"] = "0px";
            descriptionDiv.style.display = "none";
            breakDiv.style.display = "none";
        }
        listItem.append(checkbox, taskName, dueDate, span, breakDiv, descriptionDiv);
        unorderedList.append(listItem);
        taskName.onclick = function(){
            document.querySelector(".add-task-headline").textContent = "Edit a Task";
            document.querySelector("#addTaskButton").value = "Edit Task";
            modal.style.display = "block";
            addTaskBtn.value = "Edit Task"
            document.querySelector("#addTaskTitle").value = curr.name;
            document.querySelector("#addTaskDueDate").value = curr.dueDate;
            document.querySelector("#addTaskDescription").value = curr.description;
            document.querySelector("#addTaskButton").onclick = () =>{
                if(checkTaskValues().status == false){
                    alert(checkTaskValues().errorMsg);
                }
                else{
                    editTask(index, i);
                    modal.style.display = "none";
                    loadProject(index);
                }
            }
        }
    }
}

export {loadProjects, loadTasks, loadProject};