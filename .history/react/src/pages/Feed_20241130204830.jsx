import { useEffect,  useReducer } from 'react';

import PostList from '../components/Feed/PostList';

import { AppContext, appReducer } from '../Components/Feed/appContext';

import { Link, Outlet } from 'react-router-dom';


function Feed() {
  const [posts, dispatch] = useReducer(appReducer, []);

  function getComments(comments, post) {
    return comments.filter(comment => comment.postId == post.id);
  }



  useEffect(() => {
    async function fetchPosts() {
      try {
        const [postsResp, commentsResp] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/comments')
        ]);

        let posts = await postsResp.json();
        const comments = await commentsResp.json();
        posts = posts.map(post => ({...post, comments: getComments(comments, post)}));
        // setPosts(posts);
        dispatch({
          type: 'load_posts',
          payload: posts,
        });

      } catch(e) {
        console.error(e.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <PostList posts={posts} />
      <Outlet context={{ posts, dispatch }} />
      
    </div>
  );
}

export default Feed;
