import React, { useEffect, useState } from 'react';
import './styles/Account.css';

const Account = () => {
    const [profile, setProfile] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchAccessTokenAndProfile = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");

            if (!code) {
                redirectToAuthCodeFlow(clientId);
            } else {
                const token = await getAccessToken(clientId, code);
                setAccessToken(token);
                const userProfile = await fetchProfile(token);
                setProfile(userProfile);
            }
        };

        fetchAccessTokenAndProfile();
    }, []);

    async function fetchProfile(token) {
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        return await result.json();
    }

    // Optional: handle loading state while waiting for the profile data
    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className='account'>
            <div className='profile-header'>
                <div className='profile-image'>
                    <img src={profile.images[0]?.url || "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"} width={150} alt="profile" />
                </div>
                <div className='profile-info'>
                    <h2 className='profile-username'>{profile.display_name}</h2>
                    <button>Edit profile</button>
                    <ul className='profile-stats'>
                        <li><strong>2</strong> posts</li>
                        <li><strong>10</strong> followers</li>
                        <li><strong>5</strong> following</li>
                    </ul>
                </div>
            </div>
            <div className='profile-bio'>
                <h3>hi guys</h3>
            </div>

            <div className='post-grid'>
                <div className='post-item'><img src="https://via.placeholder.com/150" alt="post" /></div>
                <div className='post-item'><img src="https://via.placeholder.com/150" alt="post" /></div>
            </div>
        </div>
    );
};

export default Account;
