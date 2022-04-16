import './style.css';

let tasksArray = [];

class Task {
    constructor(title, description, dueDate, priority, checkBox){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkBox = checkBox;

    }
    writeName(title, description, dueDate, priority, checkBox){

        // Define values
        title = document.getElementById('title-value').value;
        description = document.getElementById('description-value').value;
        dueDate = document.getElementById('date-value').value;
        priority = document.getElementById('priority-value').value;
        let mainContainer = document.querySelector('.main-container'); // Stays
        checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('check-box')


        // Create new taks from DOM
        let newTask = document.createElement('div') // Stays
        newTask.classList.add('new-task') // Stays
        mainContainer.appendChild(newTask) // Stays

        

        // Create new values of each field
       let newTitle = document.createElement('p')
       let newDescription = document.createElement('p')
       let newDueDate = document.createElement('p')
       let newPriority = document.createElement('p')

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

          // Check if Checkbox is checked
          checkBox.addEventListener('click', function(){

            // For Loop Check

            if(document.querySelector('.check-box').checked){ // Checkbox checking
                // alert('its on bitch')
                document.querySelector('.new-task').style.backgroundColor = 'green';

            }else{
                document.querySelector('.new-task').style.backgroundColor = 'gray';
            }
        });


        // Clean input fields
        document.getElementById('title-value').value = ''
        document.getElementById('description-value').value = ''
        document.getElementById('date-value').value = ''
        document.getElementById('priority-value').value = ''


        // Hide task prompt
        let taskPrompt = document.querySelector('.task-prompt')
        taskPrompt.style.display = 'none'


    }

    
}

function displayPrompt(){
    let taskPrompt = document.querySelector('.task-prompt')
    taskPrompt.style.display = 'block'
}

// let axel = new Test()

function simpleCall(){
   tasksArray.push(new Task().writeName()) 
   console.log(tasksArray);
    
}



let buttonDisplay = document.querySelector('.display-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

let testButton = document.getElementById('entry');

testButton.addEventListener('click', simpleCall);

