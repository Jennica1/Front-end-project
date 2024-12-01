import React, { useState, useEffect } from 'react';
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";

const Sidebar = () => {
    const [profile, setProfile] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        // Check if there's a code in the URL for authentication
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
            // If no code, redirect to Spotify authorization
            redirectToAuthCodeFlow('your-client-id');
        } else {
            // If there's a code, fetch the access token and profile
            async function fetchData() {
                const token = await getAccessToken('your-client-id', code);
                setAccessToken(token);
                const userProfile = await fetchProfile(token);
                setProfile(userProfile);
            }

            fetchData();
        }
    }, []);

    // Fetch profile data using the access token
    const fetchProfile = async (token) => {
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        return await result.json();
    };

    // Populate UI with user profile data
    const populateUI = () => {
        if (!profile) return null;
        return (
            <div>
                <h1>{profile.display_name}</h1>
                <img src={profile.images[0]?.url} alt="Avatar" />
                <p>ID: {profile.id}</p>
                <p>Email: {profile.email}</p>
                <a href={profile.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                    Visit Spotify Profile
                </a>
            </div>
        );
    };

    return (
        <div className="sidebar">
            {accessToken ? populateUI() : <p>Loading...</p>}
        </div>
    );
};

export default Sidebar;
