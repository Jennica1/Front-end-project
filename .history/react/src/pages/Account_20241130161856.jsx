import React, { useEffect, useState } from 'react';
import './styles/Account.css';
import { redirectToAuthCodeFlow, getAccessToken } from '../Components/Account/script'; // Adjust path if needed
const Account = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clientId = 'your_spotify_client_id'; // Replace with your actual client ID
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    // If there's no code in the URL, start the OAuth flow
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      // If there's a code, exchange it for an access token and fetch the profile
      const fetchProfileData = async () => {
        const accessToken = await getAccessToken(clientId, code);
        const profileData = await fetchProfile(accessToken);
        setProfile(profileData);
        setLoading(false); // Set loading to false after data is fetched
      };
      fetchProfileData();
    }
  }, []); // Empty dependency array ensures this runs only once

  // Fetch profile data using the access token
  const fetchProfile = async (accessToken) => {
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return await response.json();
  };

  // If the profile is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the user profile once it's fetched
  return (
    <div className="account">
      <section id="profile">
        <h2>Logged in as <span>{profile.display_name}</span></h2>
        <img id="avatar" width="200" src={profile.images[0]?.url} alt="Profile Avatar" />
        <ul>
          <li>User ID: {profile.id}</li>
          <li>Email: {profile.email}</li>
          <li>Spotify URI: <a href={profile.uri}>{profile.uri}</a></li>
          <li>Link: <a href={profile.href}>{profile.href}</a></li>
          <li>Profile Image: <span>{profile.images[0]?.url}</span></li>
        </ul>
      </section>
    </div>
  );
};

export default Account;