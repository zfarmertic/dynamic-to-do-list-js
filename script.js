document.addEventListener('DOMContentLoaded', ()=>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list')


    function addTask (){
        const taskText = taskInput.value.trim();
        console.log(taskText)
        if(taskText === ''){
            alert("Enter a task");
            return;
        }
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li)
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add("remove-btn");

            removeBtn.onclick = function(){
                li.remove();
            }

            li.appendChild(removeBtn);
            taskInput.value = ' '
        
    }

    
    addButton.addEventListener('click', addTask)
    taskInput.addEventListener("keypress", (event)=>{
        if(event.key === 'Enter'){
            e.preventDefault();

            addTask()
        }
    })
})