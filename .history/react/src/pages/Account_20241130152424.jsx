import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Account.css';

const Account = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [accessToken, setAccessToken] = useState('');

    // Fetch user profile when component mounts
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        
        if (code) {
            getAccessToken(code);
        } else {
            redirectToAuthCodeFlow();
        }
    }, []);

    // Spotify authentication flow
    const redirectToAuthCodeFlow = () => {
        const clientId = 'your-spotify-client-id'; // Replace with your Spotify client ID
        const redirectUri = 'http://localhost:3000'; // Replace with your redirect URI
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-private user-read-email`;
        window.location.href = authUrl;
    };

    // Get access token from Spotify
    const getAccessToken = async (code) => {
        const clientId = 'your-spotify-client-id'; // Replace with your Spotify client ID
        const clientSecret = 'your-spotify-client-secret'; // Replace with your Spotify client secret
        const redirectUri = 'http://localhost:3000'; // Replace with your redirect URI

        try {
            const response = await axios.post(
                'https://accounts.spotify.com/api/token',
                new URLSearchParams({
                    code,
                    redirect_uri: redirectUri,
                    grant_type: 'authorization_code',
                }),
                {
                    headers: {
                        'Authorization': `Basic ${btoa(clientId + ':' + clientSecret)}`,
                    },
                }
            );
            setAccessToken(response.data.access_token);
            fetchProfile(response.data.access_token);
        } catch (error) {
            console.error('Error fetching access token:', error);
        }
    };

    // Fetch user profile from Spotify API
    const fetchProfile = async (token) => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setUserProfile(response.data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    return (
        <div className='account'>
            {userProfile ? (
                <>
                    <div className='profile-header'>
                        <div className='profile-image'>
                            <img src={userProfile.images[0]?.url || "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"} width={150} alt="profile" />
                        </div>
                        <div className='profile-info'>
                            <h2 className='profile-username'>{userProfile.display_name}</h2>
                            <button>Edit profile</button>
                            <ul className='profile-stats'>
                                <li><strong>{userProfile.followers.total}</strong> followers</li>
                                {/* Add more stats as needed */}
                            </ul>
                        </div>
                    </div>

                    <div className='profile-bio'>
                        <h3>{userProfile.bio || "This user doesn't have a bio yet."}</h3>
                    </div>

                    <div className='post-grid'>
                        <div className='post-item'>
                            <img src="https://via.placeholder.com/150" alt="post" />
                        </div>
                        <div className='post-item'>
                            <img src="https://via.placeholder.com/150" alt="post" />
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Account;
