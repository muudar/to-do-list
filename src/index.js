import {Project, getProjects} from './project'
import {ToDo} from './todo'
import './style.css';
import {loadProjects} from "./loaders";


let projects = getProjects();


loadProjects(projects, 0);


