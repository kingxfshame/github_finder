class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-lg-3'>
                        <img class='img-fluid mb-2' src='${user.avatar_url}' alt='github-avatar' />
                        <a href='${user.html_url}' class='btn btn-orange mb-4' target='_blank'></a>
                    </div>
                    <div class='col-lg-9'>
                        <span class='badge badge-danger'>Public repos: ${user.public_repos}</span>
                        <span class='badge badge-success'>Followers: ${user.followers}</span>
                        <span class='badge badge-primary'>Following: ${user.following}</span>
                    </div>
                    <br /><br />
                    <ul class='list-group'>
                        <li class='list-group-item'>Company: ${user.company}</li>
                        <li class='list-group-item'>Website: ${user.blog}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>

            <h3 class='page heading mb-3'>Latest Repos</h3>
            <div id='repos'>

            </div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
                <div class='card card-body mb-2'>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <a href='${repo.html_url}'>${repo.name}</a>
                        </div>
                        <div class='col-lg-6'>
                            <span class='badge badge-primary'>Stars: ${repo.stargazers_count}</span>
                            <span class='badge badge-success'>Watchers: ${repo.watchers_count}</span>
                            <span class='badge badge-danger'>Followers: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById("repos").innerHTML = output;
        });
    }
    showAlert(message,className){
        this.clearAlert();
        // create alert div
        const div = document.createElement('div');
        // add lass name
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        //insert the div into its parent
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }
    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}