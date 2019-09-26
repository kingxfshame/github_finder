class Github {
    constructor(){
        this.client_id = '6a09aef8e5bb42186188';
        this.client_secret = 'bb8ef624f544d9c9b52ccc406319774ef5290760';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
         const profile = await profileResponse.json();
         const repos = await repoResponse.json();

         return{profile, repos}

    }
}