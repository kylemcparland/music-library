const library = {
       tracks: {
         t01: {
           id: "t01",
           name: "Code Monkey",
           artist: "Jonathan Coulton",
           album: "Thing a Week Three"
         },
         t02: {
           id: "t02",
           name: "Model View Controller",
           artist: "James Dempsey",
           album: "WWDC 2003"
         },
         t03: {
           id: "t03",
           name: "Four Thirty-Three",
           artist: "John Cage",
           album: "Woodstock 1952"
         }
       },
       playlists: {
         p01: {
           id: "p01",
           name: "Coding Music",
           tracks: ["t01", "t02"]
         },
         p02: {
           id: "p02",
           name: "Other Playlist",
           tracks: ["t03"]
         }
       },
       generateUid: function() {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       printPlaylists: function() {
         const lp = this.playlists;
         for (let playlist in lp) {
           console.log(`${lp[playlist].id}: ${lp[playlist].name} - ${lp[playlist].tracks.length} tracks`);
         }
       },
       printTracks: function() {
         const lt = this.tracks;
         for (let track in lt) {
           console.log(`${lt[track].id}: ${lt[track].name} by ${lt[track].artist} (${lt[track].album})`);
         }
       },
       printPlaylist: function(playlistId) {
         const playlist = this.playlists[playlistId];
         const trackList = playlist.tracks;
         console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
         for (let i = 0; i < trackList.length; i++) {
           for (let x in this.tracks) {
             if (trackList[i] === x) {
               console.log(`${this.tracks[x].id}: ${this.tracks[x].name} - ${this.tracks[x].artist} (${this.tracks[x].album})`);
             }
           }
         }
       },
       addTrackToPlaylist: function(trackId, playlistId) {
         this.playlists[playlistId].tracks.push(trackId);
       },
       addTrack: function(name, artist, album) {
         const trackId = this.generateUid();
         this.tracks[trackId] = { id: trackId, name: name, arist: artist, album: album };
       },
       addPlaylist: function(name) {
         const playlistId = this.generateUid();
         this.playlists[playlistId] = { id: playlistId, name: name, tracks: [] };
       }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     console.log("--printPlaylists:");
     library.printPlaylists();
     console.log("\b");
     
     console.log("--printTracks:");
     library.printTracks();
     console.log("\b");
     
     console.log("--printPlaylist:");
     library.printPlaylist("p01");
     console.log("\b");
     
     console.log("--addTrackToPlaylist:");
     library.addTrackToPlaylist("t03", "p01");
     console.log(library.playlists.p01);
     console.log("\b");
     
     console.log("--addTrack");
     library.addTrack("Xtal", "Aphex Twin", "Selected Ambient Works 85-92");
     console.log(library.tracks);
     console.log("\b");
     
     console.log("--addPlaylist");
     library.addPlaylist("Fun Playlist");
     console.log(library.playlists);