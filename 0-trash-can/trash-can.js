
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
}

function dropTrash(event) {
    event.preventDefault();
    var id = event.dataTransfer.getData("id");
    document.getElementById(id).remove();
}
