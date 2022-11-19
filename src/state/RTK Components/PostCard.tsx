type Post = {
    userId: number;
    id: number;
    title: string;
    body: string
}

interface PostProps {
    post: Post;
}

const PostCard = (props: PostProps) => {

    const { post: { body, title, id } } = props;

    return (
        <div className="card">
            <div className="card-header">{id}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <div className="btn btn-primary">Read More...</div>
            </div>
        </div>
    );
};

export default PostCard;
