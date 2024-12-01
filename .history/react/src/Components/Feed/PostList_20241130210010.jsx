export default function PostList({ posts }) {
    if (!posts || posts.length === 0) {
        return <p>Loading posts...</p>;
    }

    return (
        <div className="posts">
            <h1>My blog</h1>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
