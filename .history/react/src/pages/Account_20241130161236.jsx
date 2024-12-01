import React, { useEffect, useState } from 'react';
import './styles/Account.css';
import { redirectToAuthCodeFlow, getAccessToken } from '../Components/Account/authCodeWithPkce'; // Adjust path if needed

const clientId = "8a9b95e4303c43cf8cedc3dc289aca4a"; // Replace with your Spotify Client ID

const Account = () => {
  const [profile, setProfile] = useState(null); // State to hold profile data
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Detect callback with code parameter and handle authentication
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Fetch Spotify data if a code is present
      fetchSpotifyData(code);

      // Remove the code from the URL to prevent an authentication loop
      const url = new URL(window.location.href);
      url.searchParams.delete("code");
      window.history.replaceState(null, "", url.toString());
    } else {
      // Redirect to Spotify for authentication if no code is present
      redirectToAuthCodeFlow(clientId);
    }
  }, []);

  const fetchSpotifyData = async (code) => {
    try {
      const accessToken = await getAccessToken(clientId, code); // Fetch the access token
      const fetchedProfile = await fetchProfile(accessToken); // Fetch user profile
      setProfile(fetchedProfile); // Update profile state
    } catch (err) {
      console.error("Error fetching Spotify data:", err);
      setError("Failed to load profile data.");
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  const fetchProfile = async (token) => {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!result.ok) {
      throw new Error(`Spotify API error: ${result.status}`);
    }
    return await result.json();
  };

  if (isLoading) {
    return <div className="account">Loading...</div>;
  }

  if (error) {
    return <div className="account">Error: {error}</div>;
  }

  return (
    <div className="account">
      {profile ? (
        <section id="profile">
          <h2>Logged in as <span id="displayName">{profile.display_name}</span></h2>
          <img
            id="avatar"
            width="200"
            src={profile.images?.[0]?.url || 'https://via.placeholder.com/200'}
            alt="Profile"
          />
          <ul>
            <li>User ID: <span id="id">{profile.id}</span></li>
            <li>Email: <span id="email">{profile.email}</span></li>
            <li>Spotify URI: <a id="uri" href={profile.external_urls.spotify}>{profile.uri}</a></li>
            <li>Link: <a id="url" href={profile.href}>{profile.href}</a></li>
            <li>Profile Image: <span id="imgUrl">{profile.images?.[0]?.url || 'No Image'}</span></li>
          </ul>
        </section>
      ) : (
        <div>No profile data available.</div>
      )}
    </div>
  );
};

export default Account;
