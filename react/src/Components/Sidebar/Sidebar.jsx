import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [playlists, setPlaylists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newPlaylistName, setNewPlaylistName] = useState('');

    // Filter playlists based on search term
    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle adding a new playlist
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPlaylistName.trim()) {
            setPlaylists([
                ...playlists,
                { id: playlists.length + 1, name: newPlaylistName.trim() },
            ]);
            setNewPlaylistName('');
        }
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
                    <li key={playlist.id} className="item">
                        <Link
                            to={`/playlist/${playlist.name.replace(/\s+/g, '-').toLowerCase()}`} // Convert playlist name to a URL-friendly format
                            className="item-link"
                        >
                            {playlist.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
