
(() => {

    const buttonCreate = document.getElementById("createTask");
    const showModal = () => {
        swal({
            title: "Crear una tarea nueva",
            text: "¿Deseas crear una nueva tarea?",
            icon: "info",
            closeModal: true,
            buttons: ['Cancelar', 'Guardar'],
            cancel: {
                text: "Cancelar",
                value: null,
                visible: false,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Guardar",
                value: true,
                visible: true,
                className: "",
                closeModal: true
            }
        })
    }

    buttonCreate.addEventListener('click', showModal, false);

})();
//swal("Hola mundo")