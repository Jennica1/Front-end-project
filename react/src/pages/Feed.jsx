import { useEffect, useReducer } from "react";
import PostList from "../Components/Feed/PostList";
import { Link, Outlet } from "react-router-dom";
import { appReducer } from "../Components/Feed/appContext";

// Hardcoded posts and comments
const hardcodedPosts = [
  { id: 1, title: "Epic rap bangerz!!", body: "Barz 🔥" },
  { id: 2, title: "100 gecs playlist", body: "hours and hours of 100 gecz vibez" },
  { id: 3, title: "Car Playlist", body: "I listen to this playlist when I drive my vehicle." },
];

const hardcodedComments = [
  { id: 1, postId: 1, body: "You're RIGHT these ARE barz!! 🔥🔥" },
  { id: 2, postId: 1, body: "Drake is mid bruh" },
  { id: 3, postId: 2, body: "STUPID HORSE I JUST FELL OUT OF THE PORSCHE!!!" },
  { id: 4, postId: 3, body: "This is excellent car vibes! Exceptional! I can't get enough of this! I've been driving for 13 days straight!!" },
];

function Feed() {
  const [posts, dispatch] = useReducer(appReducer, []);

  function getComments(comments, post) {
    return comments.filter((comment) => comment.postId === post.id);
  }

  useEffect(() => {
    const postsWithComments = hardcodedPosts.map((post) => ({
        ...post,
        comments: getComments(hardcodedComments, post),
    }));

    dispatch({
        type: "load_posts",
        payload: postsWithComments,
    });
}, []);


  return (
    <div className="App">
   
      <PostList posts={posts} />
      <Outlet context={{ posts, dispatch }} />
    </div>
  );
}

export default Feed;