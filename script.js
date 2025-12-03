document.addEventListener('DOMContentLoaded', ()=>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list')


    function addTask (){
        const taskText = taskInput.value.trim();
        console.log(taskText)
        if(taskText === ''){
            alert("Enter a task")
        }else{
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li)
            const btn = document.createElement('button');
            btn.textContent = 'Remove';
            btn.classList = 'remove-btn'

            btn.addEventListener('click', ()=>{
                li.remove();
            })

            li.appendChild(btn);
            taskInput.value = ' '

        }
    }

    document.getElementById('add-task-btn').addEventListener('click', addTask)
    taskInput.addEventListener("keypress", (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();

            addTask()
        }
    })
})