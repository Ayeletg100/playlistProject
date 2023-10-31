class User {
    static count = 1;
    constructor(username, password) {
        this.id = User.count;
        this.username = username;
        this.password = password;
        this._playlists = [];
        User.count++;
    }


// const songs = []
// songs.push(new Song('Happy', 'pharell wiliams'));
// localStorage.setItem("songs", JSON.stringify(songs))

//server
function addWebPassword(webName, usernameW, passwordW) {
    const newWP = new webPassword(webName, usernameW, passwordW);
    webPasswords.push(newWP);
    return webPasswords;
}

