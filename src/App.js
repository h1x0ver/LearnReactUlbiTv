import React, { useState} from 'react';
// import Counter from "./Components/Counter";
import './styles/App.css'
import PostList from "./Components/PostList";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: 'This is bad language for programming'},
        {id: 2, title: 'JavaScript-2', description: 'This is bad language for programming'},
        {id: 3, title: 'JavaScript-3', description: 'This is bad language for programming'}
    ])
    const [title, setTitle] = useState('')
    const [description,setDescription] = useState('')

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            description
        }
        setPosts([...posts, newPost])
        setTitle('')
        setDescription('')
    }
    return (
        <div className='App'>
            <form>
                <MyInput
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    type="text"
                    placeholder='Title The Post'
                />
                <MyInput
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    type="text"
                    placeholder='Post Description'

                />
                <MyButton onClick={addNewPost}>Create Post</MyButton>
            </form>
            <PostList posts = {posts} title='Список Постов 1'/>

        </div>
    );
};

export default App;