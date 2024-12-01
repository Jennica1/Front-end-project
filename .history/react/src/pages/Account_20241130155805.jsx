import React, { useEffect, useState } from 'react';
import './styles/Account.css';

const Account = () => {
    const [profile, setProfile] = useState(null); // State for user profile
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        // Wait for script.ts to populate the window with profile data
        const fetchProfileData = async () => {
            const profileData = window.spotifyProfile; // Assuming you store the profile in a global variable
            if (profileData) {
                setProfile(profileData);
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    <script src="src/script.ts" type="module"></script>
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
