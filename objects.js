var playlist = {
  Drake: 'passionfruit',
  Rihanna: 'Umbrella'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist;
};

updatePlaylist(playlist, 'Phil Ochs', 'Slowdive');
