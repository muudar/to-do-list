import "./style.css"



function removeActiveProjectFromProjects(){
    let unorderedList = document.querySelector(".projects-list").children[0];
    for(let i = 0; i < unorderedList.children.length; i++){
        unorderedList.children[i].classList.remove("active-project");
    }
}


function makeActiveProject(){
    let unorderedList = document.querySelector(".projects-list").children[0];
    for(let i = 0; i < unorderedList.children.length; i++){
        let thisItem = unorderedList.children[i];
        thisItem.onclick = function(){
            console.log("xd");
            removeActiveProjectFromProjects();
            thisItem.classList.add("active-project");
        }
    }
}

export {makeActiveProject};