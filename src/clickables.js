import "./style.css"
import { getProjects, setProjects , Project } from "./project";
import { loadProjects, loadTasks, loadProject } from "./loaders";


let currActive = 0;

function removeActiveProjectIndicator(){
    let unorderedList = document.querySelector(".projects-list").children[0];
    for(let i = 0; i < unorderedList.children.length; i++){
        unorderedList.children[i].classList.remove("active-project");
    }
}


function giveDeleteProjectBtnsFunctionality(){
    let btns = document.querySelectorAll(".delete-project-btn");
    for(let i = 0; i < btns.length; i++){
        let projects = getProjects();
        btns[i].onclick = function(){
            projects.splice(i+1, 1);
            setProjects(projects);
            if(currActive == i+1){
                loadProjects(getProjects(), i);
            }
            else{
                loadProjects(getProjects(), currActive);
            }
        }
    }
}

function addListenersForActiveProject(){
    let projects = getProjects();
    let items = document.querySelectorAll(".project-list-titles")
        for(let i = 0; i < projects.length; i++){
        let thisItem = items[i];
        thisItem.onclick = function(){
            removeActiveProjectIndicator();
            makeActiveProject(i);
        }
    }
}

function makeActiveProject(index){
    let unorderedList = document.querySelector(".projects-list").children[0];
    unorderedList.children[index].classList.add("active-project");
    loadProject(index);
    currActive = index;
}

function toggleAddProjectClickableEvent(){
    let addProjectBtns = document.querySelector(".add-project-btns");
    let addProjectBtn = document.querySelector(".add-project-btn");
    let addProjectForm = document.querySelector(".add-project-form");
    addProjectBtn.onclick = function(){
        addProjectForm.children[0].value = "";
        addProjectForm.classList.toggle("hidden");
    }
    let cancelBtn = addProjectBtns.children[1];
    cancelBtn.onclick = function(){
        addProjectForm.children[0].value = "";
        addProjectForm.classList.toggle("hidden");
    }
    let acceptBtn = addProjectBtns.children[0];
    acceptBtn.onclick = function(){
        let projects = getProjects();
        let name = addProjectForm.children[0].value;
        for(let i = 0; i < projects.length; i++){
            let project = projects[i];
            if(project.name == name || !name){
                alert("Name is empty or already taken!");
                return;
            }
        }
        addProjectForm.children[0].value = "";
        projects.push(new Project(name));
        setProjects(projects);
        loadProjects(projects, projects.length - 1);
    }
}


function makeProjectTitleEditable(){
    let titleBar = document.querySelector('.project-title');
    let projectTitleForm = document.querySelector(".edit-project-form");
    titleBar.onclick = function(){
        let id = titleBar.dataset.id;
        console.log(id);
        let oldText = getProjects()[id].name;
        titleBar.classList.add("hidden");
        projectTitleForm.children[0].value = oldText;
        projectTitleForm.style.display = "flex";
        let cancelBtn = projectTitleForm.children[2];
        let editBtn = projectTitleForm.children[1];
        cancelBtn.onclick = () =>{
            makeActiveProject(id);
        }
        editBtn.onclick = () => {
            let flag = 1;
            let val = projectTitleForm.children[0].value;
            if(!val){
                alert("Empty value!");
                flag = 0;
            }
            else{
                for(let project of getProjects()){
                    if(val == project.name){
                        alert("Project of this name already exists!");
                        flag = 0;
                    }
                }
            }
            if(flag == 1){
                let projects = getProjects();
                projects[id].name = val;
                setProjects(projects);
                loadProjects(projects, id);
            }
        }
    }
}

export {makeProjectTitleEditable,makeActiveProject, toggleAddProjectClickableEvent, giveDeleteProjectBtnsFunctionality, addListenersForActiveProject};