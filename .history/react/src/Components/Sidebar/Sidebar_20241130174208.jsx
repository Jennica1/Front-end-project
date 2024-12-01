import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [playlists, setPlaylists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newPlaylistName, setNewPlaylistName] = useState('');

    // Load playlists from localStorage on initial render
    useEffect(() => {
        const savedPlaylists = JSON.parse(localStorage.getItem('playlists'));
        if (savedPlaylists) {
            setPlaylists(savedPlaylists);
        }
    }, []);

    // Save playlists to localStorage whenever they change
    useEffect(() => {
        if (playlists.length > 0) {
            localStorage.setItem('playlists', JSON.stringify(playlists));
        }
    }, [playlists]);

    // Filter playlists based on search term
    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle adding a new playlist
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPlaylistName.trim()) {
            const newPlaylist = {
                name: newPlaylistName.trim(), // Use name as the ID
            };

            // Check if a playlist with the same name already exists
            if (playlists.some((playlist) => playlist.name.toLowerCase() === newPlaylist.name.toLowerCase())) {
                alert("Playlist with this name already exists!");
                return;
            }

            setPlaylists([...playlists, newPlaylist]);
            setNewPlaylistName('');
        }
    };

    // Clear all playlists from cache and reset state
    const clearCache = () => {
        localStorage.removeItem('playlists'); // Remove playlists from localStorage
        setPlaylists([]); // Reset the state to an empty array
    };

    return (
        <div className="sidebar">
            {/* Form to add new playlists */}
            <form onSubmit={handleSubmit} className="add-item-form">
                <input
                    type="text"
                    placeholder="Enter new playlist name..."
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    className="add-item-input"
                />
                <button type="submit" className="add-item-button">
                    Create New Playlist
                </button>
            </form>

            {/* Search bar for filtering playlists */}
            <input
                type="text"
                placeholder="Filter playlists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {/* List of playlists */}
            <ul className="item-list">
                {filteredPlaylists.map((playlist) => (
                    <li key={playlist.name} className="item">
                        <Link to={`/playlist/${playlist.name}`} className="item-link">
                            {playlist.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Button to clear the cache and delete all playlists */}
            <button onClick={clearCache} className="clear-cache-button">
                Clear All Playlists
            </button>
        </div>
    );
};

export default Sidebar;
