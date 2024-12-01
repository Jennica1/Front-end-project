import React, { useEffect, useState } from 'react';
import './styles/Account.css';

const Account = () => {
    const [profile, setProfile] = useState(null); // State for user profile
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchProfileData = async () => {
            // Poll for the profile for a few seconds
            let attempts = 0;
            while (!window.spotifyProfile && attempts < 10) {
                console.log("Waiting for profile...");
                await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms
                attempts++;
            }
    
            if (window.spotifyProfile) {
                console.log("Profile found:", window.spotifyProfile);
                setProfile(window.spotifyProfile);
                setIsLoading(false);
            } else {
                console.error("Failed to load profile.");
            }
        };
    
        fetchProfileData();
    }, []);
    

    return (
        <div className='account'>
            <div className='profile-header'>
                <div className='profile-image'>
                    <img
                        src={profile.images?.[0]?.url || "https://via.placeholder.com/150"}
                        width={150}
                        alt="profile"
                    />
                </div>
                <div className='profile-info'>
                    <h2 className='profile-username'>{profile.display_name || "Anonymous"}</h2>
                    <button>Edit profile</button>
                    <ul className='profile-stats'>
                        <li><strong>0</strong> posts</li>
                        <li><strong>{profile.followers?.total || 0}</strong> followers</li>
                        <li><strong>0</strong> following</li>
                    </ul>
                </div>
            </div>
            <div className='profile-bio'>
                <h3>{profile.email || "No bio available"}</h3>
            </div>

            <div className='post-grid'>
                <div className='post-item'><img src="https://via.placeholder.com/150" alt="post" /></div>
                <div className='post-item'><img src="https://via.placeholder.com/150" alt="post" /></div>
            </div>
        </div>
    );
};

export default Account;
