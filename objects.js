var playlist = {
  Drake: 'passionfruit',
  Rihanna: 'Umbrella'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', 'Slowdive');


function removeFromPlaylist(playlist, artistNAme) {
  delete playlist.artistName
  return playlist
}

removeFromPlaylist(playlist, 'Phil Ochs');
