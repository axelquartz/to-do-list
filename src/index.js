import './style.css';


let tasks = [];
let deletedTasks = [];
let newGroup = new Array();

tasks.name = 'tasks'
deletedTasks.name = 'deletedTasks'

let mainContainer = document.querySelector('.main-container'); // Stays


// Create Initial container
let initialContainer = document.createElement('div');
initialContainer.classList.add('initial-container')
mainContainer.appendChild(initialContainer)

// Create group container
let groupContainer = document.createElement('div');
groupContainer.classList.add('group-container')

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
        

        // Push user values to array
        let currentTask = new Task(title, description, dueDate, priority)
        tasks.push(currentTask)
        console.log(tasks);
        console.log(tasks.length);



        for(let i = tasks.length - 1; i != tasks.length; i++){

                // Create new taks from DOM
                let newTask = document.createElement('div') // Stays
                newTask.classList.add('new-task') // Stays
                initialContainer.appendChild(newTask) // Stays
        
                // Create new values of each field
               let newTitle = document.createElement('p')
               let newDescription = document.createElement('p')
               let newDueDate = document.createElement('p')
               let newPriority = document.createElement('p')
              

               // Create checkbox
               let checkBox = document.createElement('input');
               checkBox.setAttribute('type', 'checkbox');
               checkBox.classList.add('check-box')

               // Create Group Button
               let createGroup = document.getElementById('new-group')

               

               // Call task DOM elements
               let movedTask = document.createElement('div') // Stays
               movedTask.classList.add('moved-task') // Stays
               mainContainer.appendChild(groupContainer)
               groupContainer.appendChild(movedTask) // Stays
               

                // Switch Group Button
                let switchGroup = document.createElement('button')
                switchGroup.setAttribute('id', 'switch-group')

        
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
                newTask.append(switchGroup)

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

               // Create Group
               createGroup.addEventListener('click', function(){
                    newGroup
                    newGroup.name = 'newGroup' + [i]
                    console.log(`this is i ${i}`);
                    let groupTitle = document.createElement('div')
                    groupTitle.classList.add('group-title')
                    groupTitle.innerText = 'Group Title'
                    groupContainer.append(groupTitle)
               })

                // Switch group 
               switchGroup.addEventListener('click', function (){
                newGroup.push(tasks[i])
                console.log(newGroup);
                console.log(newGroup.length);  
                newTask.style.display = 'none'
                movedTask.style.display = 'block'
                // Append new values to new task block
                movedTask.appendChild(newTitle)
                movedTask.appendChild(newDescription)
                movedTask.appendChild(newDueDate)
                movedTask.appendChild(newPriority)
                movedTask.appendChild(checkBox)
                movedTask.append(switchGroup)
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






// Display task prompt
function displayPrompt(){
    let taskPrompt = document.querySelector('.task-prompt')
    taskPrompt.style.display = 'block'
}

let buttonDisplay = document.querySelector('.display-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

// Enter task prompt
let testButton = document.getElementById('entry');

testButton.addEventListener('click', function(){
    new Task().createTask()
});


