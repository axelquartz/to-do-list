import './style.css';

let tasks = [];

let deletedTasks = [];

class Task {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
    createTask(title, description, dueDate, priority){

        // Define values
        title = document.getElementById('title-value').value;
        description = document.getElementById('description-value').value;
        dueDate = document.getElementById('date-value').value;
        priority = document.getElementById('priority-value').value;
        let mainContainer = document.querySelector('.main-container'); // Stays

        // Push user values to array
        tasks.push(new Task(title, description, dueDate, priority))
        console.log(tasks);
        console.log(tasks.length);

        for(let i = tasks.length - 1; i != tasks.length; i++){

                // Create new taks from DOM
                let newTask = document.createElement('div') // Stays
                newTask.classList.add('new-task') // Stays
                mainContainer.appendChild(newTask) // Stays
        
                // Create new values of each field
               let newTitle = document.createElement('p')
               let newDescription = document.createElement('p')
               let newDueDate = document.createElement('p')
               let newPriority = document.createElement('p')

               // Create checkbox
               let checkBox = document.createElement('input');
               checkBox.setAttribute('type', 'checkbox');
               checkBox.classList.add('check-box')


        
                // Assign input values to each element
                newTitle.innerText = title;
                newDescription.innerText = description;
                newDueDate.innerText = dueDate;
                newPriority.innerText = priority;
        
                // Append new values to new task block
                newTask.appendChild(newTitle)
                newTask.appendChild(newDescription)
                newTask.appendChild(newDueDate)
                newTask.appendChild(newPriority)
                newTask.appendChild(checkBox)

               // Remove task functionality
               checkBox.addEventListener('click', function(){
                if(checkBox.checked){
                    newTask.classList.add('checked-task')
                    deletedTasks.push(tasks[i])
                    newTask.remove()
                    console.log(`this is i ${i}`);
                    console.log(tasks);
                    console.log(deletedTasks);
                }else{
                    console.log('Not checked bitch');
                    newTask.classList.add('unchecked-task')

                }
               })
                

                // Clean input fields
                document.getElementById('title-value').value = ''
                document.getElementById('description-value').value = ''
                document.getElementById('date-value').value = ''
                document.getElementById('priority-value').value = ''

        }

        // Hide task prompt
        let taskPrompt = document.querySelector('.task-prompt')
        taskPrompt.style.display = 'none'

    }
}

// Class extention
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

function displayPrompt(){
    let taskPrompt = document.querySelector('.task-prompt')
    taskPrompt.style.display = 'block'
}

let buttonDisplay = document.querySelector('.display-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

let testButton = document.getElementById('entry');

testButton.addEventListener('click', function(){
    new Task().createTask()
});
