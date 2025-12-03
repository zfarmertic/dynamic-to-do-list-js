// document.addEventListener('DOMContentLoaded', ()=>{
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list')

    
//     function addTask (){
//         const taskText = taskInput.value.trim();
//         console.log(taskText)
//         if(taskText === ''){
//             alert("Enter a task");
//             return;
//         }
//             const li = document.createElement('li');
//             li.textContent = taskText;
            
//             const removeBtn = document.createElement('button');
//             removeBtn.textContent = 'Remove';
//             removeBtn.classList.add("remove-btn");

            
//             removeBtn.onclick = function(){
//                 li.remove();
//             }

//             li.appendChild(removeBtn);
//             taskInput.value = ' '

            
        
//     }

    
//     addButton.addEventListener('click', addTask)
//     taskInput.addEventListener("keypress", (event)=>{
//         if(event.key === 'Enter'){
//             e.preventDefault();

//             addTask()
//         }
//     })
// })


document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Element Constants ---
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 1. Initialize tasks array from Local Storage, default to empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // --- Helper Functions for Persistence ---

    // Function to save the current tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // --- Task Creation Logic (DOM and Storage) ---
    
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add("remove-btn");

        // Removal logic
        removeBtn.onclick = function() {
            // Remove from DOM
            li.remove();

            // 🛑 Remove from Array and Storage
            // Find index of the task in the central array
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex > -1) {
                // Remove 1 item at the found index
                tasks.splice(taskIndex, 1); 
                saveTasks();
            }
        };

        li.appendChild(removeBtn);
        return li;
    }

    // --- Initialization: Load Tasks from Local Storage ---
    // Function runs once on load to populate the list
    (function loadTasks() {
        tasks.forEach(taskText => {
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
        });
    })();

    // --- Main Task Addition Function ---

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert("Enter a task");
            return;
        }

        // 1. Create element and add to DOM
        const li = createTaskElement(taskText);
        taskList.appendChild(li);

        // 2. Add task to the central array and save to storage
        tasks.push(taskText);
        saveTasks();

        // 3. ✅ Fix: Clear the input field correctly
        taskInput.value = '';
    }

    // --- Attach Event Listeners ---
    
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === 'Enter') {
            // ✅ Fix: Use 'event.preventDefault()'
            event.preventDefault(); 
            addTask();
        }
    });
});