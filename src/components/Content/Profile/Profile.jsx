import React from 'react';
import MyPosts from '../../MyPosts/MyPosts';
import s from './Profile.module.css';



const Profile = (props) => {
  return (
    <div className={s.content}>
      {/* <div className='flowerBox'>
        <img className={s.flower} src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
      </div> */}
      <div className={s.profile}>Profile</div>
      <MyPosts dataPosts={props.dataPosts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;