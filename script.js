
(() => {

    const buttonCreate = document.getElementById("createTask");
    const buttonCancel = document.getElementById("btnCancelNewTask");
    const modal = document.getElementById("modalNewTask");
    const showModal = () => {
        modal.style.display = "block"
    }
    const closeModal = () => {
        window.onclick = function (event) {
            if (event.target == modal || event.target == buttonCancel) {
                modal.style.display = "none";
            }
        }
    }
    closeModal()
    buttonCreate.addEventListener('click', showModal, false);
    buttonCancel.addEventListener('click', closeModal, false);

})();
//swal("Hola mundo")