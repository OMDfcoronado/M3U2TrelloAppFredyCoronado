const API_URL = "https://my-json-server.typicode.com/OMDfcoronado/M3U2TrelloAppFredyCoronado/tasks";

axios.get(API_URL)
    .then((res) => showAllTasks(res.data))
    .catch((err) => console.error(err))

const showAllTasks = (data) => {
    data.map((task) => createTask(task));
}

const createTask = (task) =>{

    let newTask = document.createElement("article");

    newTask.classList.add("card-task")

    console.log(task)

}