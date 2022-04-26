import './style.css';
import { compareAsc, format } from 'date-fns'



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
importantTitle.innerText='Important Tasks'
importantContainer.appendChild(importantTitle)

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

                important.push(tasks[i])
                deletedTasks.push(tasks[i])

                // Create new taks from DOM
                let newTask = document.createElement('div') // Stays
                newTask.classList.add('new-task-shrinked') // Stays
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
                
                // Create expand button for New Task
                let expandNew = document.createElement('button')
                let expanNewImage = document.createElement('div')
                expanNewImage.innerHTML = '<img src="../src/expand-image.svg" alt="expand-task">'
                expanNewImage.classList.add('expand-new-image')
                expandNew.appendChild(expanNewImage)
                
                expandNew.classList.add('expand-new')

                // Create expand button for Important Task
                let expandImportant = document.createElement('button')
                expandImportant.classList.add('expand-important')         
                let expandImportantImage = document.createElement('div')
                expandImportantImage.innerHTML = '<img src="../src/expand-image.svg" alt="expand-task">'
                expandImportantImage.classList.add('expand-important-image')
                expandImportant.appendChild(expandImportantImage)
                
                // Call task DOM elements
                let importantTask = document.createElement('div') // Stays
                importantTask.classList.add('important-task') // Stays
                mainContainer.appendChild(importantContainer)

                importantContainer.appendChild(importantTask) // Stays

                // Switch Group Button
                let switchGroup = document.createElement('button')
                switchGroup.setAttribute('id', 'switch-group')
                switchGroup.innerText = 'Change Group'
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
                newTask.append(expandNew)

                //Show Initial taskt title
                // newTaskTitle.style.display = 'block'
                newTaskTitle.classList.remove('removed-element')
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
                importantTask.classList.remove('important-task')
                importantTask.classList.add('removed-task')

                // Extend and hide new task DONE
                expandNew.addEventListener('click', function (){
                        // If is closed
                        if (newTask.classList.contains('new-task-shrinked')){

                            console.log('expand new');

                            // Expand new ask
                            newTask.classList.remove('new-task-shrinked')
                            newTask.classList.add('new-task')

                            // Show task description
                            newDescription.classList.remove('removed-element')
                            newDescription.classList.add('visible-element')

                            // Show switch button
                            switchGroup.classList.remove('removed-element')
                            switchGroup.classList.add('visible-element')

                        // If is opened
                        }else if(newTask.classList.contains('new-task')){

                            console.log('close new');

                            // Shrink new task
                            newTask.classList.remove('new-task')
                            newTask.classList.add('new-task-shrinked')

                            // Hide task description
                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')

                            // Hide Switch button
                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')
                        };
                       
                        });

                    // Extend and hide Important Task elements
                    expandImportant.addEventListener('click', function(){

                        console.log('expand important');

                        // If important is closed
                        if (importantTask.classList.contains('important-task-shrinked')){

                            // Open important task
                            importantTask.classList.remove('important-task-shrinked')
                            importantTask.classList.add('important-task')

                            // Show description
                            newDescription.classList.remove('removed-element')
                            newDescription.classList.add('visible-element')

                            // Show switch button
                            switchGroup.classList.remove('removed-element')
                            switchGroup.classList.add('visible-element')

                        // If important is Opened
                        }else if(importantTask.classList.contains('important-task')){

                            console.log('close important');

                            // Shrink important task
                            importantTask.classList.remove('important-task')
                            importantTask.classList.add('important-task-shrinked')

                            // newTask.style.backgroundColor = 'red'

                            // Hide description
                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')

                            // Hide switch button
                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')
                        };
        
                });
                
                    // Switch group 
                    switchGroup.addEventListener('click', function (){   

                        // Switch to New Task
                        if(switchGroup.classList.contains('important')){

                            console.log('Switch to New Task');
                            console.log(tasks.length);
                            console.log(tasks);

                            expandImportant.classList.remove('expand-important')
                            expandImportant.classList.add('removed-element')

                            expandNew.classList.remove('removed-element')
                            expandNew.classList.add('expand-new')

                            switchGroup.classList.remove('important')
                            switchGroup.classList.add('initial')

                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')

                            importantTask.classList.remove('important-task')
                            importantTask.classList.remove('important-task-shrinked')
                            importantTask.classList.add('removed-task')

                            newTask.classList.remove('removed-task')
                            newTask.classList.remove('new-task')
                            newTask.classList.add('new-task-shrinked')

                            newTask.appendChild(newTitle)
                            newTask.appendChild(newDescription)
                            newTask.appendChild(newDueDate)
                            newTask.appendChild(checkBox)
                            newTask.append(switchGroup)
                            newTask.append(expandImportant)

                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')
                            
                            //Switch to Important Task
                        }else if(switchGroup.classList.contains('initial')){

                            console.log('Switched to Important Task');
                            console.log(important.length);
                            console.log(important);

                            expandImportant.classList.remove('removed-element')
                            expandImportant.classList.add('expand-important')

                            expandNew.classList.remove('expand-new')
                            expandNew.classList.add('removed-element')

                            switchGroup.classList.remove('initial')
                            switchGroup.classList.add('important')

                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')

                            newTask.classList.remove('new-task')
                            newTask.classList.remove('new-task-shrinked')
                            newTask.classList.add('removed-task')

                            importantTask.classList.remove('removed-task')
                            importantTask.classList.remove('important-task')
                            importantTask.classList.add('important-task-shrinked')

                            importantTask.appendChild(newTitle)
                            importantTask.appendChild(newDescription)
                            importantTask.appendChild(newDueDate)
                            importantTask.appendChild(checkBox)
                            importantTask.append(switchGroup)
                            importantTask.append(expandImportant)

                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')
                        }
                    })

               // Remove task functionality (checkbox)
               checkBox.addEventListener('click', function(){

                if(checkBox.checked && newTask.classList.contains('new-task') || newTask.classList.contains('new-task-shrinked')){
                    newTask.classList.remove('new-task')
                    newTask.classList.remove('new-task-shrinked')
                    newDescription.classList.remove('visible-element')
                    newDescription.classList.add('removed-element')
                    expandNew.classList.remove('expand-new')
                    expandNew.classList.add('removed-element')
                    newTask.classList.add('checked-task')
                    switchGroup.classList.remove('visible-element')
                    switchGroup.classList.add('removed-element')

                    console.log(`this is i ${i}`);
                    // console.log(tasks);
                    console.log(deletedTasks.length);
                    console.log(deletedTasks);
                    
                }else if(checkBox.checked && importantTask.classList.contains('important-task') || importantTask.classList.contains('important-task-shrinked')){

                    importantTask.classList.remove('important-task')
                    importantTask.classList.remove('important-task-shrinked')
                    newDescription.classList.remove('visible-element')
                    newDescription.classList.add('removed-element')
                    expandImportant.classList.remove('expand-important')
                    expandImportant.classList.add('removed-element')
                    importantTask.classList.add('checked-task')
                    switchGroup.classList.remove('visible-element')
                    switchGroup.classList.add('removed-element')
                    console.log(`this is i ${i}`);
                    // console.log(tasks);
                    console.log(deletedTasks.length);
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

