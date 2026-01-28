import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            setPosts(res.data);
        })
    }, [])

    return (
        <div className="grid md:grid-cols-3 gap-4 p-4">
            {posts.map(post => (
                <div key={post.id} className="border border-stone-600 rounded p-3 shadow-md shadow-amber-500">
                    <Link to={`/${post.id}`} className="text-2xl font-bold capitalize">{post.title}</Link>
                    <p className="text-stone-600">{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;