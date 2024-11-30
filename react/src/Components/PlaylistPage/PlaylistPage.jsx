import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
    const { name } = useParams(); // Get playlist name from the URL

    return (
        <div>
            <h1>Playlist: {name}</h1> {/* Display the playlist name */}
            <p>Here you can add songs to this playlist.</p>
        </div>
    );
};

export default PlaylistPage;
