import React, { useEffect, useState } from 'react';
import './styles/Account.css';
import { redirectToAuthCodeFlow, getAccessToken } from '../Components/Account/authCodeWithPkce'; // Adjust path if needed

const clientId = "8a9b95e4303c43cf8cedc3dc289aca4a"; // Replace with your Spotify Client ID
const Account = () => {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
  
      if (code) {
        fetchSpotifyData(code);
        const url = new URL(window.location.href);
        url.searchParams.delete("code");
        window.history.replaceState(null, "", url.toString());
      } else {
        redirectToAuthCodeFlow(clientId);
      }
    }, []);
  
    const fetchSpotifyData = async (code) => {
      try {
        const accessToken = await getAccessToken(clientId, code);
        console.log("Access Token:", accessToken); // Debug log
        const fetchedProfile = await fetchProfile(accessToken);
        console.log("Fetched Profile Data:", fetchedProfile); // Debug log
        setProfile(fetchedProfile);
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setError("Failed to load profile data.");
      } finally {
        setIsLoading(false);
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
  
      const data = await result.json();
      console.log("Fetched Profile Data:", data); // Debug log
      return data;
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