const taskForm = document.getElementById('taskForm');
const errTask = document.getElementById('errTask');
const taskList = document.getElementById('taskList')

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const task = formData.get('task');
    if (task.trim() == "") {
        errTask.textContent = "Task cannot be empty.";
    } else {
        errTask.textContent = "";
        taskForm.reset();
        const li = document.createElement('li');
        li.classList = 'italic p-2 flex';
        const p = document.createElement('p');
        p.classList = 'mr-auto';
        p.textContent = task;
        li.appendChild(p);
        const completeBtn = document.createElement('button');
        completeBtn.classList = 'text-green-500 mr-2 complete-btn';
        completeBtn.textContent = '✅';
        completeBtn.setAttribute('onclick', 'this.parentElement.firstChild.classList.toggle("line-through")');
        li.appendChild(completeBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList = 'text-red-500 delete-btn';
        deleteBtn.textContent = '❌';
        deleteBtn.setAttribute('onclick', 'this.parentElement.remove()');
        li.appendChild(deleteBtn);
        taskList.prepend(li);
    }
})
