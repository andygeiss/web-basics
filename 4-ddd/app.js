let repository = new Repository();
let service = new Service(repository);
let command = new Command(service, repository);

// Events:
// =======

// Event "Name was updated" should trigger Command "render Name"
command.bind("keyup", "txtInput", function (service, repository) {
    let name = document.getElementById("txtInput").value;
    repository.set("name", name);
    service.render();
});

service.render();
