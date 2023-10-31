class User{
    static count= 1;

    constructor(username, password ){
        this.id=User.count;
        this.username=username;
        this.password=password;
        this._webPasswords=[];

        User.count++;
    }

    
}



class webPassword{
    static count= 1;

    constructor(webName, userNameW,passwordW ){
        this.id= webPassword.count;
        this.userNameW=userNameW;
        this.passwordW=passwordW;
        webPassword.count++;
    }
}

const songs = []
songs.push(new Song('Happy', 'pharell wiliams'));
localStorage.setItem("songs", JSON.stringify(songs))

// const songs = []
// songs.push(new Song('Happy', 'pharell wiliams'));
// localStorage.setItem("songs", JSON.stringify(songs))

//server
function addWebPassword(webName, usernameW, passwordW) {
    const newWP = new webPassword(webName, usernameW, passwordW);
    webPasswords.push(newWP);
    return webPasswords;
}

