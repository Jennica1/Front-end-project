import Post from './Post';
import { AppContext } from './appContext';

import { useOutletContext } from 'react-router-dom';

export default function PostList(){
    const context = useOutletContext();

    // if (!context) {
     
    //     return <p>Error: Context not found.</p>;
    // }

    // const { posts } = context;

    // if (!posts || posts.length === 0) {
        
    // }

    return (
        <div className="posts">
            <h1>My blog</h1>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}