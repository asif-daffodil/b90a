import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            setPost(res.data);
        })
    }, []);
    return (
        <div>
            {!post && <p>Loading...</p>}
            {post && (
                <>
                    <h2 className="text-2xl font-bold capitalize">{post?.title}</h2>
                    <p className="text-stone-600">{post?.body}</p>
                    <Link to="/" className="text-blue-500 underline">Back to Home</Link>
                </>
            )}
        </div>
    );
};

export default Post;