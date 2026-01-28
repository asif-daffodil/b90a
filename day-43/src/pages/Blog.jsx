import { Helmet } from "react-helmet";
import BlogPost from "../components/BlogPost";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Posts</title>
            </Helmet>
            <BlogPost />
        </div>
    );
};

export default Blog;