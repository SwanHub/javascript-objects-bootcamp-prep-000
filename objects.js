var theGoods = {
  Drake: 'passionfruit',
  Rihanna: 'Umbrella'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist;
}

updatePlaylist(theGoods, 'Phil Ochs', 'Slowdive');
