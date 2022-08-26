import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi"
import './Posts.css';

export const Posts = () => {

    const api = useApi();
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const response = await api.getAllPosts()
            setPosts(response.posts)
            console.log(posts)
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="container-posts">
            {posts.map((posts) =>
                <div key={posts._id} className="posts">{posts.text}</div>
            )}
        </div >
    )
}
