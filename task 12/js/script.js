const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let cards = document.querySelector(".cards");
function tasks_show(tasksList = tasks) {
    cards.innerHTML = "";
    tasksList.forEach((task, index) => {
        if (task.status == "pending") {
            cards.innerHTML += `
            <div class="card red" data-index="${index}">
                <div class="card-left" >
                    <span>${task.name}</span>
                    <P>${task.description}</P>
                    <p class="fw-bold text-warning">${task.status} ....</P>
                </div>
                <div class="task-actions">
                    <button class="btn btn-danger btn-sm shadow-sm fw-bold action-delete-edit" id="deleteTask" data-index="${index}"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg></button>
                    <button class="btn btn-warning btn-sm shadow-sm fw-bold action-delete-edit" id="editTask" data-index="${index}"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg></button>
                </div>

            </div>
            `;
        } else {
            cards.innerHTML += `
            <div class="card green" data-index="${index}">
                <div class="card-left" >
                    <span>${task.name}</span>
                    <P>${task.description}</P>
                    <p class="fw-bold text-warning">${task.status} 🟢</P>
                </div>
                <div class="task-actions">
                    <button class="btn btn-danger btn-sm shadow-sm fw-bold action-delete-edit" id="deleteTask" data-index="${index}"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg></button>
                    <button class="btn btn-warning btn-sm shadow-sm fw-bold action-delete-edit" id="editTask" data-index="${index}"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg></button>
                </div>

            </div>
            `;
        }
    })

}
tasks_show(tasks);

document.querySelector("#all_Tasks").addEventListener("click", () => {
    tasks_show(tasks)
});
document.querySelector("#completed_Tasks").addEventListener('click', () => {
    filterTasks("completed")
});
document.querySelector("#pending_Tasks").addEventListener('click', () => {
    filterTasks("pending")
});


function filterTasks(filter) {

    if (filter == "pending") {
        tasks_show(tasks.filter((task) => task.status == "pending"));
    } else if (filter == "completed") {
        tasks_show(tasks.filter((task) => task.status == "completed"));
    }
}



document.querySelector("#addTask").addEventListener("click", add_task);

function add_task() {
    let duplicate = tasks.find((task) => task.name == document.querySelector("#taskName").value);
    if (duplicate) {
        alert("This task already exists");
        return;
    }
    let name = document.querySelector("#taskName").value;
    let description = document.querySelector("#taskDescription").value;
    if (name == "" || description == "") {
        alert("Please enter a name and description for your new task");
        return;
    }
    tasks.push({
        name: name,
        description: description,
        status: "pending"
    });
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    tasks_show(tasks);
}


cards.addEventListener("click", function(event) {

    const deleteButton = event.target.closest('#deleteTask');
    const editButton = event.target.closest('#editTask');
    
    if (deleteButton) {
        let Index = deleteButton.getAttribute("data-index");
        tasks.splice(Index, 1);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
        tasks_show(tasks);
    } else if (editButton) {
        let Index = editButton.getAttribute("data-index");
        let newName = prompt("Enter new name");
        let newDescription = prompt("Enter new description");
        let status = prompt("Enter new status (pending or completed)");
            tasks[Index] = {
            name: newName,
            description: newDescription,
            status: status
            };
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            tasks_show(tasks);
        }
});

cards.addEventListener("click", function(event) {

    const changestatus = event.target.closest('.card');    
    if (changestatus) {
        let Index = changestatus.getAttribute("data-index");
        if (tasks[Index].status == "pending") {
            tasks[Index].status = "completed";
        } else {
            tasks[Index].status = "pending";
        }
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
        tasks_show(tasks);
    }
});