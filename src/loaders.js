import { makeActiveProject } from "./clickables";
import "./style.css"
function loadProjects(projects){
    let projectsList = document.querySelector(".projects-list");
    let unorderedList = document.createElement("ul");
    for(let i = 0; i < projects.length; i++){
        let listItem = document.createElement("li");
        if(i == 0)
            listItem.classList.add("active-project");
        listItem.innerHTML = projects[i].name + ' <span class="material-symbols-outlined">delete</span></li>';
        unorderedList.appendChild(listItem);
    }
    projectsList.prepend(unorderedList);
    makeActiveProject();
}

export {loadProjects};