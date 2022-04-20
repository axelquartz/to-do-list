import './style.css';

// Initial arrays
let tasks = [];
let deletedTasks = [];
let important = new Array();
important.name = 'important'

// Array names
tasks.name = 'tasks'
deletedTasks.name = 'deletedTasks'

// Load all containers
let mainContainer = document.querySelector('.main-container'); // Stays
let initialContainer = document.querySelector('.initial-container'); // Stays
let importantContainer = document.querySelector('.important-container'); // Stays
let secondaryContainer = document.querySelector('.secondary-container'); // Stays



// Initial class
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

               // Call task DOM elements
               let importantTask = document.createElement('div') // Stays
               importantTask.classList.add('important-task') // Stays
               mainContainer.appendChild(importantContainer)
               importantContainer.appendChild(importantTask) // Stays

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

               // Remove task functionality (checkbox)
               checkBox.addEventListener('click', function(){
                if(checkBox.checked){
                    newTask.classList.add('checked-task')
                    deletedTasks.push(tasks[i])
                    newTask.remove()
                    importantTask.remove()
                    console.log(`this is i ${i}`);
                    console.log(tasks);
                    console.log(deletedTasks);
                }else{
                    console.log('Not checked bitch');
                    newTask.classList.add('unchecked-task')

                }
               })

                // Switch group 
               switchGroup.addEventListener('click', function (){
                important.push(tasks[i])
                console.log(important);
                console.log(important.length);  
                newTask.style.display = 'none'
                importantTask.style.display = 'flex'
                // Append new values to new task block
                importantTask.appendChild(newTitle)
                importantTask.appendChild(newDescription)
                importantTask.appendChild(newDueDate)
                importantTask.appendChild(newPriority)
                importantTask.appendChild(checkBox)
                importantTask.append(switchGroup)
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


