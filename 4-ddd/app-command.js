// Command handles the event-driven execution of commands.
class Command {
    constructor(service, repository) {
        this.repository = repository;
        this.service = service;
    }

    bind(event, id, fn) {
        let ele = document.getElementById(id);
        let repository = this.repository;
        let service = this.service;
        ele.addEventListener(event, function () {
            fn(service, repository);
        });
    }
}
