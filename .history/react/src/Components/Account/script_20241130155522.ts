// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce";

const clientId = "8a9b95e4303c43cf8cedc3dc289aca4a";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function fetchProfile(token: string): Promise<UserProfile | null> {
    try {
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });

        if (!result.ok) {
            console.error("Failed to fetch profile:", result.status, await result.text());
            return null;
        }

        const profile = await result.json();
        console.log("Fetched profile successfully:", profile);
        return profile;
    } catch (error) {
        console.error("Error while fetching profile:", error);
        return null;
    }
}


function populateUI(profile: UserProfile) {
    // Store the profile globally for React to access
    window.spotifyProfile = profile;
    console.log("Profile set in window:", window.spotifyProfile);

    // Original UI population logic (optional)
    document.getElementById("displayName")!.innerText = profile.display_name;
    document.getElementById("avatar")!.setAttribute("src", profile.images[0]?.url || "");
    document.getElementById("id")!.innerText = profile.id;
    document.getElementById("email")!.innerText = profile.email;
    document.getElementById("uri")!.innerText = profile.uri;
    document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url")!.innerText = profile.href;
    document.getElementById("url")!.setAttribute("href", profile.href);
    document.getElementById("imgUrl")!.innerText = profile.images[0]?.url || "";
}


