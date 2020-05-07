class GitHub {
   constructor(){
      this.client_id = '3b4b5d9f4bf3d2f2bab6';
      this.client_secret = 'b51b4b3925ceb8034489d6ba6d5a4cc110dce998';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
   }

   async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return {
         profile,
         repos
      };
   }
}