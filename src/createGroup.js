
const Task = require('./index')

class NewGroup extends Task {

    
    createNewGroup(){
        let newGroup;
        newGroup = new Array();
        newGroup.push(new Task().createTask())
        console.log(newGroup);
    }
}

let addGroupButton = document.querySelector('#new-group');

addGroupButton.addEventListener('click', function(){
    console.log('module bitch');
     new NewGroup().createNewGroup();
     
})

// export {NewGroup}