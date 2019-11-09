import React from 'react'
import './Profile.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;