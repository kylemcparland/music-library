const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library) {
       const lp = library.playlists;
       for (let playlist in lp) {
              console.log(`${lp[playlist].id}: ${lp[playlist].name} - ${lp[playlist].tracks.length} tracks`)
       }
};

console.log("--printPlaylists:")
printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library) {
       const lt = library.tracks;
       for (let track in lt) {
              console.log(`${lt[track].id}: ${lt[track].name} by ${lt[track].artist} (${lt[track].album})`);
       }
};

console.log("--printTracks:")
printTracks(library)

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(library, playlistId) {
       const playlist = library.playlists[playlistId];
       const trackList = playlist.tracks;
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
       for (let i = 0; i < trackList.length; i++) {
              for (let x in library.tracks) {
                     if (trackList[i] === x) {
                            console.log(`${library.tracks[x].id}: ${library.tracks[x].name} - ${library.tracks[x].artist} (${library.tracks[x].album})`)
                     }
              }
       }
};

console.log("--printPlaylist:")
printPlaylist(library, "p01")

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId);
}

addTrackToPlaylist("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
const addTrack = function(name, artist, album) {
       const trackId = generateUid()
       library.tracks[trackId] = { id: trackId, name: name, arist: artist, album: album }
}

addTrack("Xtal", "Aphex Twin", "Selected Ambient Works 85-92");

// adds a playlist to the library
const addPlaylist = function(name) {
       const playlistId = generateUid()
       library.playlists[playlistId] = {id: playlistId, name: name, tracks: []};
}

addPlaylist("Fun Playlist")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}