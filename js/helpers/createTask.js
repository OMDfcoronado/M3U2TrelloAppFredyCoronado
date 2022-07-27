const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const formData = evento.target;
    const modal = document.getElementById("modalNewTask")

    const data = {
        /* Se accede a  los campos por el nombre de su id  */
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        details: formData.detailsTask.value,
        deadLine: Number(moment().add(formData.deadLineTask.value, 'days').format('X')),
        created: Number(moment().format("X")),
        state: "to-do"
    };

    axios.post(API_URL, data)
        .then((res) => {
            createTask(res.data);
            formData.reset();
            modal.style.display = "none";
        })
        .catch((error) => console.error(error))

});