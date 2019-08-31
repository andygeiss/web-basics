// Service handles the presentation.
class Service {
    constructor(repository) {
        this.repository = repository;
    }

    render() {
        let repository = this.repository;
        let root = document.getElementById("root");
        root.innerHTML = "Your name is " + repository.get("name");
    }
}
