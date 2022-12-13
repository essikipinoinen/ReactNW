import React, { useState, useEffect } from 'react'
import './App.css'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [showPosts, setShowPosts] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(oliot => setPosts(oliot))
    }, []
    )

    return (
        <>
            <h2 onClick={() => setShowPosts(!showPosts)}>Julkaisut Typicodesta</h2>

            {
                showPosts && posts && posts.map(p =>
                    <div className='posts' key={p.id}>
                        <h4>Käyttäjä: {p.userId}</h4>
                        <h3>Postaus {p.id}: {p.title}</h3>
                        <p>{p.body}</p>
                        <br />
                    </div >
                )
            }
        </>
    )
}

export default Posts
