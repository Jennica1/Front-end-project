import { useEffect, useReducer } from "react";
import PostList from "../Components/Feed/PostList";
import { Link, Outlet } from "react-router-dom";
import { appReducer } from "../Components/Feed/appContext";

// Hardcoded posts and comments
const hardcodedPosts = [
  { id: 1, title: "First Post", body: "This is the first post" },
  { id: 2, title: "Second Post", body: "This is the second post" },
  { id: 3, title: "Third Post", body: "This is the third post" },
];

const hardcodedComments = [
  { id: 1, postId: 1, body: "First comment on post 1" },
  { id: 2, postId: 1, body: "Second comment on post 1" },
  { id: 3, postId: 2, body: "First comment on post 2" },
  { id: 4, postId: 3, body: "First comment on post 3" },
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