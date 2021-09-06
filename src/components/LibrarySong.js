import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
  // Handlers
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song, // Keep the song attributes the same
          active: true, // But change the flag to true
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    console.log("select song");
    setSongs(newSongs);

    // Check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
