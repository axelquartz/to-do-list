import './style.css';
import { compareAsc, format } from 'date-fns'




// Initial arrays
let tasks = [];


// Load all containers
let mainContainer = document.querySelector('.main-container'); // Stays
let initialContainer = document.querySelector('.initial-container'); // Stays
let newTaskTitle = document.querySelector('.initial-container>h2')

window.onload = defineTask();

// Initial class
function Task(title){
    
        this.title = title;
    }

function defineTask(title){


        // Define values
        title = document.getElementById('title-value').value;
        // localStorage.setItem('group', title)

        let newTaskAdd = new Task(title)

        tasks.push(newTaskAdd)



        for(let i = localStorage.length - 1; i != localStorage.length; i++){


            localStorage.setItem('title' + i, newTaskAdd.title)

            console.log(tasks);

            console.log('localStorage lenght' + localStorage.length);

            // Add new taks from DOM
            let newTask = document.createElement('div') // Stays
            newTask.classList.add('new-task-shrinked') // Stays
            newTask.setAttribute('id', 'task' + i)
            initialContainer.appendChild(newTask) // Stays

            // Create new values of each field
            let newTitle = document.createElement('h2')
            newTitle.classList.add('new-title')  

            let retriveTitle = localStorage.getItem('title'+i);

            newTitle.innerHTML = retriveTitle

            // Append new values to new task block
            newTask.append(retriveTitle)
            
            return
        }
        
    }


//Here will end the scope
//Out of scope

console.log(tasks.length);


newTaskTitle.classList.remove('removed-element')
newTaskTitle.classList.add('visible-element')

// Clean input fields
document.getElementById('title-value').value = ''
document.getElementById('description-value').value = ''
// document.getElementById('date-value').value = ''


// Hide task prompt
let taskPrompt = document.querySelector('.task-prompt')
taskPrompt.style.display = 'none'

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
    defineTask()
});


