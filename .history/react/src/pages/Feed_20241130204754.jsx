import { useReducer } from "react";
import PostList from "../components/Feed/PostList";
import { appReducer } from "../Components/Feed/appContext";
import { Link, Outlet } from "react-router-dom";

function Feed() {
  const hardcodedPosts = [
    {
      id: 1,
      title: "First Post",
      body: "This is the body of the first post.",
      comments: [
        { id: 1, postId: 1, name: "Commenter 1", body: "Great post!" },
        { id: 2, postId: 1, name: "Commenter 2", body: "Thanks for sharing!" },
      ],
    },
    {
      id: 2,
      title: "Second Post",
      body: "This is the body of the second post.",
      comments: [
        { id: 3, postId: 2, name: "Commenter 3", body: "Interesting read!" },
      ],
    },
    {
      id: 3,
      title: "Third Post",
      body: "This is the body of the third post.",
      comments: [],
    },
  ];

  const [posts, dispatch] = useReducer(appReducer, hardcodedPosts);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <PostList posts={posts} />
      <Outlet context={{ posts, dispatch }} />
    </div>
  );
}

export default Feed;
