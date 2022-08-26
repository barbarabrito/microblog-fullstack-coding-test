import './PostBox.css';
import { MdSend } from 'react-icons/md';
import { ImFilePicture } from 'react-icons/im';
import { useState, useEffect, useParams } from 'react';
import { useApi } from '../../hooks/useApi';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '550px'
    },
};

Modal.setAppElement('#root');

export const PostBox = () => {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState('');
    const [postId, setPostId] = useState('');
    const api = useApi();

    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(postContent, idFromPost) {
        setText(postContent)
        setPostId(idFromPost)
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#34414c';
        subtitle.style.textAlign = 'center';
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function editPost(e){
        e.preventDefault();
        console.log(postId);
        console.log(text);
        try{
            await api.updatePost(postId, text)
            setPosts([...posts]);
            setIsOpen(false);
            setText('');
            window.location.reload;
        }catch(error){
            console.log(error);
        }
        
    }

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
                            {/* <p>{post.createdAt}</p> */}
                            <button id="edit-post-btn" onClick={(e) => { openModal(post.text, post._id)}}><FiEdit /></button>
                            <button id="delete-post-btn" onClick={(e) => { handleRemovePost(post._id) }}><BsTrash /></button>
                        </div>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            onUpdatedPost={editPost}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <textarea defaultValue={text} onChange={(e) => setText(e.target.value)}/>
                                <button id="update-post-btn"onClick={(e) => { editPost(e, postId) }}>save</button>
                            </form>
                        </Modal>
                        {post.text}
                    </div>
                )}

            </div >
        </>
    )

}