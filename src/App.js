import React, {useMemo, useState} from 'react';
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";
import './styles/App.css'
import PostFilter from "./Components/PostFilter";
// import Counter from "./Components/Counter";


const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: 'This is bad language for programming'},
        {id: 2, title: 'c#', description: 'This is best language for programming'},
        {id: 3, title: 'Ruby', description: 'Hard Programming Language'}
    ])
    const [filter, setFilter] = useState({sort:'', query: ''})


    const sortedPost = useMemo(() => {
        console.log('misdeed')
        if (filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const  sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.includes(filter.query))
    }, [filter.query, sortedPost])



    const createPost = (newPosts) => {
        setPosts([...posts, newPosts])
    }
    //поулчаем пост из почернего конпонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className='App'>
            <PostForm create={createPost} />

            <hr style={{margin: '18px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {sortedAndSearchedPost.length !== 0
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPost} title='Список Постов 1'/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }

        </div>
    );
};

export default App;