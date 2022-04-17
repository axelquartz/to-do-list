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
    writeName(title, description, dueDate, priority){

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

        // checkBox = document.createElement('input');
        // checkBox.setAttribute('type', 'checkbox');
        // checkBox.classList.add('check-box')
        // checkBox.classList.add(i)
        // // let newCheckBox = checkBox[i]

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
                    console.log('checked bitch');
                    newTask.classList.add('checked-task')
                    deletedTasks.push(tasks[i])
                    tasks.splice(i,1)
                    console.log(tasks);
                    console.log(deletedTasks);
                }else{
                    console.log('Not checked bitch');
                    newTask.classList.add('unchecked-task')

                }
               })
                
               
//             newRemoveButton.addEventListener('click', function test(){
//             newCard.classList.remove('card')
//             newCard.remove();
//             myLibrary.splice(i,1)

                        // Clean input fields
                document.getElementById('title-value').value = ''
                document.getElementById('description-value').value = ''
                document.getElementById('date-value').value = ''
                document.getElementById('priority-value').value = ''

        }

                //



 

        //   // Check if Checkbox is checked
        //   checkBox.addEventListener('click', function(){

        //     // For Loop Check
        //     for (i = 0; i < tasks.length+1; i++) {
        //         if(checkBox.checked){ // Checkbox checking
        //             console.log(i);
        //             console.log(tasks);
        //             console.log(document.getElementsByClassName('check-box')[i] + 'checkd');
        //             // alert('its on bitch')
        //             // document.getElementsByClassName(i).style.backgroundColor = 'green';
    
        //         }else{
        //             // document.getElementsByClassName(i).style.backgroundColor = 'green';
        //             console.log(i);
        //             console.log(tasksArray);
        //             console.log(document.getElementsByClassName('check-box')[i] + 'unchecked');


        //         }
        //     }

           
        // });



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

// function simpleCall(){
//    tasks.push(new Task().writeName()) 
//    console.log(tasks);
    
// }

let buttonDisplay = document.querySelector('.display-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

let testButton = document.getElementById('entry');

testButton.addEventListener('click', function(){
    new Task().writeName()
});





//NOT HERE




// let myLibrary = [];

// function Book(title, author, pages){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
// }

// function displayBooks(title, author, pages){
//     title = document.getElementById('name').value
//     author = document.getElementById('author').value;
//     pages = document.getElementById('pages').value
//     // let grade = document.getElementById('grade').value;

//     // Push user values to array
//     myLibrary.push(new Book(title, author, pages));

//     for (let i = myLibrary.length - 1; i != myLibrary.length; i++) {
//         //Add a bew card
//         cardsContainer = document.querySelector('.cards-container')
//         let newCard = document.createElement('div')
//         newCard.className = 'card';
//         newCard.setAttribute('id', i);
//         cardsContainer.append(newCard)  

//         // Add remove button
//         newRemoveButton = document.createElement('button')
//         newRemoveButton.className = 'remove-button'
//         newCard.append(newRemoveButton)
//         newRemoveButton.innerText = 'x'
        
//         //Add text info of the new added card
//         newBr = document.createElement('br') 
//         p1 = document.createElement('p')
//         p2 = document.createElement('p')
//         p3 = document.createElement('p')

//         newCard.append(p1)
//         p1.append(myLibrary[i].title);
        
//         newCard.append(p2)

//         p2.append(myLibrary[i].author)

//         newCard.append(p3)

//         p3.append(myLibrary[i].pages)

//         console.log(i);
        
//         // Add toggle button
//         newToggle = document.createElement('button')
//         newToggle.className = 'toggle'
//         newToggle.setAttribute('id', 'toggle' + i);

//         newCard.append(newToggle)
        
//         // Set toggle button value as 'Not Readed' 
//         let toggleModify = document.getElementById('toggle' + i)
//         toggleModify.value = 'Not Readed'
//         toggleModify.innerText = toggleModify.value;
//         toggleModify.style.backgroundColor = '#ff4d47'

//         // Toggle button If Else Statement
//         toggleModify.addEventListener('click', function toggleButton(){
           
//             if (toggleModify.value == 'Not Readed') {
//                 toggleModify.value = 'Readed'
//                 toggleModify.style.backgroundColor = '#509c1e'
//                 toggleModify.innerText = toggleModify.value
//             } else {
//                 toggleModify.value = 'Not Readed'
//                 toggleModify.innerText = toggleModify.value
//                 toggleModify.style.backgroundColor = '#ff4d47'

//             }
//         })

//         // Remove button functionality
//         newRemoveButton.addEventListener('click', function test(){
//             newCard.classList.remove('card')
//             newCard.remove();
//             myLibrary.splice(i,1)


//         })

//         // console.log(myLibrary[i].title);
//         document.getElementById('name').value = '';
//         document.getElementById('author').value = '';
//         document.getElementById('pages').value = '';


//         // Add readed status

        
        
//     }
// }
// // Submit entry button
// let entry = document.getElementById('entry');
// entry.addEventListener('click', displayBooks);

// // Submit entry by pressing 'enter'
// document.addEventListener('keypress', function(e){
//     if (e.key === 'Enter') {
//         displayBooks()
//     }
// });