import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src='https://cdn.impactinit.com/cdn/x/x@f59b8e3f78/smss52/smsimg30/pv/ingimagecontributors/ing_47129_23497.jpg' 
                alt=''
            />
            </div>
            <div className={s.body}>
                <p className={s.name}>{props.name}</p>
                <p className={s.message}>{props.msg}</p>
            </div>
            
        </div>
    )
}

export default Post;