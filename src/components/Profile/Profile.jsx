import React from 'react'
import './Profile.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'

let posts = [
    { likesCount: 13, message: 'Hi, how R U?' },
    { likesCount: 15, message: 'It\'s my first post' }
]

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;