class User {
    static count = 1;
    constructor(username, password) {
        this.id = User.count;
        this.username = username;
        this.password = password;
        this._playlists = [];
        User.count++;
    }

    
}

class Playlist {
    static count = 1;
    constructor(name) {
        this.id = Playlist.count;
        this.name = name;
        this.playlistSongs = [];
        Playlist.count++;
    }


}

class Song {
    static count = 1;
    constructor(name, artist) {
        this.id = Song.count;
        this.name = name;
        this.artist = artist;
        Song.count++;
    }
}

const songs = []
songs.push(new Song('Happy', 'pharell wiliams'));
localStorage.setItem("songs", JSON.stringify(songs))