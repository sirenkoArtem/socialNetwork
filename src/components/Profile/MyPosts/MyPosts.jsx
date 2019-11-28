import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

const MyPosts = props => {

    // let posts = [
    //     { likesCount: 13, message: 'Hi, how R U?' },
    //     { likesCount: 15, message: 'It\'s my first post' }
    // ]

    let postsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)

    return (
        <div className="posts">
            My posts
            <div>
                <div>
                    <textarea name="forPost" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <ul className="list post">

                {postsElements}

            </ul>
        </div>
    )
}

export default MyPosts;