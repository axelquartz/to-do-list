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
let importantTitle = document.querySelector('.important-container>h2')
let secondaryContainer = document.querySelector('.secondary-container'); // Stays
let newTaskTitle = document.querySelector('.initial-container>h2')

// Initial class
class Task {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    createTask(title, description, dueDate){

        // Define values
        title = document.getElementById('title-value').value;
        description = document.getElementById('description-value').value;
        dueDate = document.getElementById('date-value').value;
        
        // Push user values to array
        let currentTask = new Task(title, description, dueDate)
        tasks.push(currentTask)
        console.log(tasks);
        console.log(tasks.length);

        for(let i = tasks.length - 1; i != tasks.length; i++){

                // Create new taks from DOM
                let newTask = document.createElement('div') // Stays
                newTask.classList.add('new-task') // Stays
                initialContainer.appendChild(newTask) // Stays
        
                // Create new values of each field
               let newTitle = document.createElement('h2')
               newTitle.classList.add('new-title')
               let newDescription = document.createElement('p')
               newDescription.classList.add('new-description')
               let newDueDate = document.createElement('p')
               newDueDate.classList.add('new-due-date')

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
                switchGroup.innerText = 'Switch Group'
                switchGroup.classList.add('initial')

        
                // Assign input values to each element
                newTitle.innerText = title;
                newDescription.innerText = description;
                newDueDate.innerText = dueDate;
        
                // Append new values to new task block
                newTask.appendChild(checkBox)
                newTask.appendChild(newTitle)
                newTask.appendChild(newDueDate)
                newTask.appendChild(newDescription)
                newTask.append(switchGroup)

                //Show Initial taskt title
                // newTaskTitle.style.display = 'block'
                newTaskTitle.classList.add('visible-element')

                // Hide extended elements
                // newDescription.style.display='none' // Hide description
                newDescription.classList.remove('visible-element')
                newDescription.classList.add('removed-element')
                // switchGroup.style.display='none'
                switchGroup.classList.remove('visible-element')
                switchGroup.classList.add('removed-element')


                // Hide Important Task
                // importantTask.style.display = 'none'
                importantTask.classList.add('removed-task')




                // Extend new task
                    newTask.addEventListener('click', function (){
                        // If is closed
                        if (newDescription.style.display='none' || newDescription === null){

                            console.log('click expand');
                            newTask.style.backgroundColor = 'purple'
                            newTask.appendChild(newDescription)
                            newTask.append(switchGroup)
                            // Show extended elements
                            // newDescription.style.display='block' // Hide description
                            newDescription.classList.add('visible-element')
                            // newDueDate.style.display='block' // Hide description
                            newDueDate.classList.add('visible-element')
                            // switchGroup.style.display='block'
                            switchGroup.classList.add('visible-element')

                        // If is opened
                        }else if(newDescription.classList.contains('visible-element')){

                            newTask.style.backgroundColor = 'pink'

                            // Hide extended elements
                            // newDescription.style.display='none' // Hide description
                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')
                            // switchGroup.style.display='none'
                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')
                        };
                       
                        });


                    // Extend Important Task elements
                    importantTask.addEventListener('click', function(){

                    importantTask.appendChild(newDescription)
                    importantTask.append(switchGroup)
    
                    if (importantTask.style.display = 'grid'){
                        // Show extended elements
                        newTask.style.backgroundColor = 'orange'
                        importantTask.style.backgroundColor = 'orange'

                        // newDescription.style.display='block' // Hide description
                        newDescription.classList.remove('removed-element')
                        newDescription.classList.add('visible-element')
                        // newDueDate.style.display='block' // Hide description
                        newDueDate.classList.remove('removed-element')
                        newDueDate.classList.add('visible-element')
                        // switchGroup.style.display='block'
                        switchGroup.classList.remove('removed-element')
                        switchGroup.classList.add('visible-element')

                    // Important Task is Opened
                    }else if(newDescription.classList.contains('visible-element')){
                        // Hide extended elements
                        newTask.style.backgroundColor = 'red'

                        // newDescription.style.display='none' // Hide description
                        newDescription.classList.remove('visible-element')
                        newDescription.classList.add('removed-element')
                        // switchGroup.style.display='none'
                        switchGroup.classList.remove('visible-element')
                        switchGroup.classList.add('removed-element')
                    };
    
                });
                

                    // Switch group 
                    switchGroup.addEventListener('click', function (){   

                        if(switchGroup.classList.contains('important')){
                            console.log('Initial Task');
                            switchGroup.classList.remove('important')
                            switchGroup.classList.add('initial')
                            switchGroup.remove()
                            newDescription.remove()
                            newTask.style.display = 'grid'
                            importantTask.classList.remove('important-task')
                            importantTask.classList.add('removed-task')
                            mainContainer.style.backgroundColor = 'blue'
                            // importantTask.style.display = 'none'

                            newTask.appendChild(newTitle)
                            newTask.appendChild(newDueDate)
                            newTask.appendChild(checkBox)

                        }else if(switchGroup.classList.contains('initial')){
                            mainContainer.style.backgroundColor = 'green'
                            console.log('Important Task');
                            important.push(tasks[i])
                            console.log(important);
                            console.log(important.length);  
                            switchGroup.classList.remove('initial')
                            switchGroup.classList.add('important')
                            newTask.style.display = 'none'
                            newTask.classList.add('removed-task')
                            importantTask.style.display = 'grid'
                            importantTask.classList.add('important-task')
                            // importantTitle.style.display = 'block'
                            // Append new values to new task block
                            importantTask.appendChild(newTitle)
                            // importantTask.appendChild(newDescription)
                            importantTask.appendChild(newDueDate)
                            importantTask.appendChild(checkBox)
                            // importantTask.append(switchGroup)

                        }
                               
        
                    })

               // Remove task functionality (checkbox)
               checkBox.addEventListener('click', function(){
                if(checkBox.checked){
                    newTask.classList.add('checked-task')
                    importantTask.classList.add('checked-task')
                    deletedTasks.push(tasks[i])
                    // newTask.remove()
                    // importantTask.remove()
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

let buttonDisplay = document.querySelector('.button-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

// Enter task prompt
let testButton = document.getElementById('entry');

testButton.addEventListener('click', function(){
    new Task().createTask()
});


