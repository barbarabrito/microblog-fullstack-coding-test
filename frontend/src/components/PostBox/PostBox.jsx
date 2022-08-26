import './PostBox.css';
import { MdSend } from 'react-icons/md';
import { ImFilePicture } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import {BsTrash} from 'react-icons/bs';
import {FiEdit} from 'react-icons/fi';

export const PostBox = () => {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState('');
    const api = useApi();

    useEffect(() => {
        getPosts();
    }, [text])

    const getPosts = async () => {
        try {
            const response = await api.getAllPosts()
            setPosts(response.posts)
            console.log(posts);
        } catch (error) {
            console.log(error);
        }

    }

    const handleNewPost = async () => {
        try {
            await api.createPost(text)
            setPosts([...posts])
            console.log(posts);
            setText('');
        } catch (error) {
            console.log(error);
        }
    }

    const handleRemovePost = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este veículo?")) {
            try {
                await api.removePost(id)
                const updatedPosts = posts.filter((post) => post._id != id)
                setPosts(updatedPosts)
                return response.data

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <div className="container-box">
                <div className="box-title">
                </div>
                <textarea
                    id="text-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What's happening?"
                >

                </textarea>
                <div className="footer-box">
                    <label htmlFor="file-btn"><ImFilePicture /></label>
                    <input type="file" id="file-btn" name="file-btn" className="container-box-btns" />
                    <button className="container-box-btns" onClick={handleNewPost}><MdSend /></button>
                </div>
            </div>
            <div className="container-posts">


                {posts.map((post) =>
                    <div className="posts" key={post._id}>
                        <div className="post-header">
                            <button id="edit-post-btn" onClick={(e) => { }}><FiEdit/></button>
                            <button id="delete-post-btn" onClick={(e) => { handleRemovePost(post._id) }}><BsTrash/></button>
                        </div>
                        {post.text}
                    </div>
                )}

            </div >
        </>
    )

}