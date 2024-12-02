import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlaylistPage.css';

const PlaylistPage = () => {
    const { name } = useParams(); // Get playlist name from the URL
    const [songs, setSongs] = useState([]);

    // This simulates fetching playlist data from localStorage or API
    useEffect(() => {
        const savedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
        const currentPlaylist = savedPlaylists.find(p => p.name === name);
        if (currentPlaylist) {
            setSongs(currentPlaylist.songs || []);
        }
    }, [name]);

    const handleAddSong = () => {
        // Placeholder for adding a new song to the playlist
        const newSong = prompt('Enter the song name:');
        if (newSong) {
            const updatedSongs = [...songs, newSong];
            setSongs(updatedSongs);

            // Save the updated songs back to localStorage
            const savedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
            const playlistIndex = savedPlaylists.findIndex(p => p.name === name);
            if (playlistIndex !== -1) {
                savedPlaylists[playlistIndex].songs = updatedSongs;
                localStorage.setItem('playlists', JSON.stringify(savedPlaylists));
            }
        }
    };

    return (
        <div className="playlist-page">
            <h1 className="playlist-title">Playlist: {name}</h1>
            <p className="playlist-description">Here you can add songs to this playlist.</p>

            {/* Display list of songs */}
            {songs.length > 0 ? (
                <ul className="song-list">
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            ) : (
                <p>No songs in this playlist yet. Add some!</p>
            )}

            {/* Button to add songs */}
            <button className="add-song-button" onClick={handleAddSong}>
                Add a Song
            </button>
        </div>
    );
};

export default PlaylistPage;
