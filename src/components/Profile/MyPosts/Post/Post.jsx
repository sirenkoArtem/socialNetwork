import React from 'react';
import './Post.scss';

const Post = (props) => {

    return (
        <li className="item">
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png" alt="avatar" />
            { props.message }
            <div>
                <span>{ props.likes } likes</span>
            </div>
        </li>
    )
}

export default Post;