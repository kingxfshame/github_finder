loadEventListener();

function loadEventListener() {
    document.addEventListener('DOMContentLoaded', getObject);
}

function getObject() {
    const gitHub = new GitHub;
    const ui = new UI;

    gitHub.getUser('kingxfshame').then(data => {
        console.log(data);
        //ui.showProfile(data.profile);
        //ui.showProfile(data.repos);
    });
}