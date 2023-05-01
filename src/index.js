import {Project, getProjects, setProjects} from './project'
import {ToDo} from './todo'
import './style.css';
import {loadProjects} from "./loaders";


let projects = getProjects();
if(!projects){
    let projectsArr = [];
    projectsArr.push(new Project("My Project"));
    localStorage.setItem("projects", projectsArr);
}

loadProjects(projects, 0);


