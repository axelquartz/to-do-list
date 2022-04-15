import './style.css';

class Task {
    constructor(title, description, dueDate, priority, checkList){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;

    }
    writeName(title, description, dueDate, priority, checkList){
        
        let mainContainer = document.querySelector('.main-container');
        let newContainer = document.createElement('div')
        let newText = document.createElement('h1')

        title = document.getElementById('title-value').value;
        description = 'el'
        // alert(`Hello, my name is ${firstName}, and my age is ${secondName}`);
        newContainer.classList.add('test')
        newText.innerText = title;
        newContainer.appendChild(newText)
        mainContainer.appendChild(newContainer)
        document.getElementById('title-value').value = ''

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
    new Task().writeName()
}

let buttonDisplay = document.querySelector('.display-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

let testButton = document.getElementById('entry');

testButton.addEventListener('click', simpleCall);

