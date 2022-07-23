const API_URL = "https://my-json-server.typicode.com/OMDfcoronado/M3U2TrelloAppFredyCoronado/tasks";

axios.get(API_URL)
    .then((res) => showAllTasks(res.data))
    .catch((err) => console.error(err))

const showAllTasks = (data) => {
    data.map((task) => createTask(task));
}

const createTask = (task) => {

    let newTask = document.createElement("article");
    let taskTitle = document.createElement("h3");
    let taskResponsible = document.createElement("p");
    let taskDetails = document.createElement("p");
    let taskDate = document.createElement("p");
    let taskCreate = document.createElement("p");
    //
    let columnToDo = document.querySelector("#todoTasks");
    let columnProgress = document.querySelector("#progressTasks");
    let columnDone = document.querySelector("#doneTasks");

    newTask.classList.add("card-task")
    taskTitle.classList.add("text-xl", "font-bold");
    taskResponsible.classList.add("font-bold");
    taskDate.classList.add("font-mono", "italic")
    taskCreate.classList.add("font-mono", "italic", "text-orange-600");

    taskTitle.innerText = task.title;
    taskResponsible.innerHTML = `<span class=""> Responsable: </span> ${task.person}`;
    taskDetails.innerHTML = `<span class=""> Detalles: </span> ${task.details}`;
    taskDate.innerHTML = `<span class=""> Plazo: </span> ${task.deadLine}`;
    taskCreate.innerHTML = `<span class=""> Creación: </span> ${task.created}`;

    newTask.appendChild(taskTitle);
    newTask.appendChild(taskResponsible);
    newTask.appendChild(taskDetails);
    newTask.appendChild(taskDate);
    newTask.appendChild(taskCreate);

    if (task.state === "to-do") {
        columnToDo.appendChild(newTask);
    }

    if (task.state === "in-progress") {
        columnProgress.appendChild(newTask);
    }

    if (task.state === "done") {
        columnDone.appendChild(newTask);
    }

}