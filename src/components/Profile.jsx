import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='content'>
      <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' />
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;