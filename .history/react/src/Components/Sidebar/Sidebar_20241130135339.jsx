import React, { useState } from 'react';
import './Sidebar.css';
import axios from 'axios';

const Sidebar = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newItem, setNewItem] = useState('');
    const [accessToken, setAccessToken] = useState(''); // Replace with actual token retrieval
    const [userId, setUserId] = useState(''); // Replace with actual user ID retrieval

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const createSpotifyPlaylist = async (playlistName) => {
        try {
            // API call to create a playlist
            const response = await axios.post(
                `https://api.spotify.com/v1/users/${userId}/playlists`,
                {
                    name: playlistName,
                    description: 'Created via Spotify API',
                    public: false, // Set to true if you want it public
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Add the new playlist to the list of items
            const newPlaylist = response.data.name; // Spotify returns the created playlist
            setItems([...items, newPlaylist]);
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newItem.trim()) {
            // Call Spotify API to create a new playlist
            await createSpotifyPlaylist(newItem.trim());
            setNewItem(''); // Clear the input field
        }
    };

    return (
        <div className="sidebar">
            <form onSubmit={handleSubmit} className="add-item-form">
                <input
                    type="text"
                    placeholder="Enter new playlist name..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="add-item-input"
                />
                <button type="submit" className="add-item-button">
                    Create New Playlist
                </button>
            </form>
            <input
                type="text"
                placeholder="Filter"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="item-list">
                {filteredItems.map((item, index) => (
                    <li key={index} className="item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
