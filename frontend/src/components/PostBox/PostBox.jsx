import './PostBox.css';
import { MdSend } from 'react-icons/md';
import { ImFilePicture } from 'react-icons/im';
import { useState } from 'react';
import {useApi} from '../../hooks/useApi';

export const PostBox = () => {

    const [post, setPost] = useState([]);
    const [text, setText] = useState('');
    const api = useApi();

    const handleNewPost = async () => {
        try{
            const response = await api.createPost(text)
            setPost([...text])
            console.log(response.data);
            setText('');
        }catch(error){
            console.log(error);
        }    
    }

    return(
        <div className="container-box">
            <div className="box-title">
                {/* <p>What are you thinking?</p> */}
            </div>
            <textarea
                id="text-input"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder="What are you thinking?"
            >

            </textarea>
            <div className="footer-box">
                <label htmlFor="file-btn"><ImFilePicture/></label>
                <input type="file" id="file-btn" name="file-btn" className="container-box-btns"/>
                <button className="container-box-btns" onClick={handleNewPost}><MdSend/></button>
            </div>
        </div>
    )
}