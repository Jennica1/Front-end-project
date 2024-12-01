import React, { useEffect, useState } from 'react';
import './styles/Account.css';
import { redirectToAuthCodeFlow, getAccessToken } from '../Components/Account/authCodeWithPkce'; 
const Account = () => {
  // State to hold the profile data
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
      const clientId = "8a9b95e4303c43cf8cedc3dc289aca4a";
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
          // Redirect to the authorization code flow if no code is found in the URL
          redirectToAuthCodeFlow(clientId);
      } else {
          // If code is found, get the access token
          getAccessToken(clientId, code)
              .then((accessToken) => fetchProfile(accessToken))
              .then((profileData) => {
                  setProfile(profileData);
                  setLoading(false); // Set loading to false once data is fetched
              })
              .catch((err) => {
                  setError(err);
                  setLoading(false);
              });
      }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to fetch the profile using the access token
  async function fetchProfile(accessToken) {
      const response = await fetch("https://api.spotify.com/v1/me", {
          method: "GET",
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      });

      if (!response.ok) {
          throw new Error("Failed to fetch profile");
      }

      return await response.json();
  }

  // Render loading, error, or profile UI based on state
  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  return (
      <div className='account'>
          <section id="profile">
              <h2>Logged in as <span id="displayName">{profile.display_name}</span></h2>
              <img id="avatar" width="200" src={profile.images[0]?.url || '#'} alt="Profile" />
              <ul>
                  <li>User ID: <span id="id">{profile.id}</span></li>
                  <li>Email: <span id="email">{profile.email}</span></li>
                  <li>Spotify URI: <a id="uri" href={profile.external_urls.spotify}>{profile.uri}</a></li>
                  <li>Link: <a id="url" href={profile.href}>{profile.href}</a></li>
                  <li>Profile Image: <span id="imgUrl">{profile.images[0]?.url}</span></li>
              </ul>
          </section>
      </div>
  );
};

export default Account;