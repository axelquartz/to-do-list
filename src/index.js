window.onload = function(){

    //Hide task prompt
    let formTodo = document.querySelector('.formTodo');
    let createTaskButton = document.querySelector('.create-task')
    formTodo.style.display='none'
    
    createTaskButton.addEventListener('click', function(){
        formTodo.style.display='flex'

    })

    

    // Submit form
    let list = document.querySelector('.list');

    // Add items to the list
    if(JSON.parse(localStorage.getItem('todoItems')) !== null){
        JSON.parse(localStorage.getItem('todoItems')).map(todo=>{

            // Create task
            let task = document.createElement('div')
            task.className = 'item'
            
            // Create checkbox
            let input = document.createElement('input')
            input.type = 'checkbox' 
            input.name = 'itemCheck' 
            input.classList.add('checkbox')
            input.id = todo.id;
    
            // Create title
            let titleText = document.createElement('h2')
            titleText.innerHTML = todo.name
            task.append(input)
            task.append(titleText)
            list.append(task)

            // Create description
            let descriptionText = document.createElement('p')
            descriptionText.innerHTML = todo.description;
            task.append(descriptionText)
    
    
    })
}
    // Remove items from list and localStorage
    let inputs = document.querySelectorAll('input[name="itemCheck"]')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function(e){
            if(JSON.parse(localStorage.getItem('todoItems')) !== null){
                let itemsLocal = []
                JSON.parse(localStorage.getItem('todoItems')).map(todo=>{
                    if(todo.id != e.target.id){
                        itemsLocal.push(todo)
                    }
            })
            localStorage.setItem('todoItems', JSON.stringify(itemsLocal))
            window.location.reload()
        }
        })
    }

    //form submiut
    formTodo.onsubmit = function(e){
        e.preventDefault();
        let value = e.target.name.value;
        let descriptionValue = e.target.description.value;

        let items = [];
        let id = Id();
        function Id(){
            if(JSON.parse(localStorage.getItem('todoItems')) === null || JSON.parse(localStorage.getItem('todoItems')).length === 0){
                return 1;
            }else{
                return JSON.parse(localStorage.getItem('todoItems'))[JSON.parse(localStorage.getItem('todoItems')).length -1].id + 1;
            }
        }
        let item = {
            id:id,
            name: value,
            description: descriptionValue
        }
        console.log(item);

        if(value == ''){
            alert('add a value')
        }else if(JSON.parse(localStorage.getItem('todoItems')) === null){
            items.push(item)
            localStorage.setItem('todoItems',JSON.stringify(items));
            window.location.reload()

        }else{
            JSON.parse(localStorage.getItem('todoItems')).map(todo=>{
                items.push(todo)
            })
            items.push(item)
            localStorage.setItem('todoItems',JSON.stringify(items))
            window.location.reload()

        }
        console.log(item);

        }
        
    }