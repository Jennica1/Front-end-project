import Post from './Post';
import { AppContext } from './appContext';

import { useOutletContext } from 'react-router-dom';

export default function PostList(){
    
    return (
        <div className="posts">
            <h1>My blog</h1>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}