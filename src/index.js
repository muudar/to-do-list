import {Project} from './project'
import {ToDo} from './todo'
import './style.css';
import {loadProjects} from "./loaders";


let projects = [];

let defaultProject = new Project("My Project");
let projectTwo = new Project("Gym");
let projectThree = new Project("University");

projects.push(defaultProject, projectTwo, projectThree);

loadProjects(projects);


