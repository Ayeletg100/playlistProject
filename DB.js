class User{
    static count= 1;

    constructor(username, password ){
        this.id=count;
        this.username=username;
        this.password=password;
        this._playlists=[];

        count++;
    }

}

class Playlist{
    static count=1;
    constructor(name){
        this.id= count;
        this.name=name;
        this.songs=[];

        count++;
    }
}

class Song{
    static count=1;
    constructor(name, artist){
        this.id=count
        this.name=name;
        this.artist=artist;
    }
}

