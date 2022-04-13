import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      {/* <div className='flowerBox'>
        <img className={s.flower} src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
      </div> */}
      
      <MyPosts />
    </div>
  )
}

export default Profile;