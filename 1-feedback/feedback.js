
function dropTrash(event) {
    event.preventDefault();
    var id = event.dataTransfer.getData("id");
    document.getElementById(id).remove();
}
