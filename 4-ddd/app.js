let repository = new Repository();
let service = new Service(repository);
let command = new Command(service, repository);

command.bind("keyup", "txtInput", function (service, repository) {
    let name = document.getElementById("txtInput").value;
    repository.set("name", name);
    service.render();
});

service.render();
