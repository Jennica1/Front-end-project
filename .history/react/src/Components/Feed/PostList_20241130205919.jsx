export default function PostList() {
    const context = useOutletContext() || { posts: [], dispatch: () => {} };

    const { posts } = context;

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
