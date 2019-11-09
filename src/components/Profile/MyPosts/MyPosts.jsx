import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message="Hi, how R U?" likes="15" />
                <Post message="It's my first post" likes="20" />
            </ul>
        </div>
    )
}

export default MyPosts;