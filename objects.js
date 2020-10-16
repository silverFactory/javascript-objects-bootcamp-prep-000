var playlist = {
  prince: 'Purple Rain'
}
function updatPlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle;
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
