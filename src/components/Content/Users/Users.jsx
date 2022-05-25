import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';


// class Users extends React.Component {


const User = (props) => {
    let unfollow = (user_id) => {
        debugger;
         props.unfollow(user_id) 
    };
    let follow = (user_id) => { 
        debugger;
        props.follow(user_id) 
    };
    return (
        <div className={s.item}>
            <div className={s.picture}>
                <img
                    src={props.data.photos.small != null ? props.data.photos.small : 'https://cdn.impactinit.com/cdn/x/x@f59b8e3f78/smss52/smsimg30/pv/ingimagecontributors/ing_47129_23497.jpg'}
                    alt=''>
                </img>
            </div>
            <div className={s.center}>
                <div className={s.name}>{props.data.name}</div>
                <div className={s.status}>{props.data.status}</div>
            </div>
            {props.data.followed ?
                <div className={s.button} onClick={()=>unfollow(props.data.id)}>Remove</div> :
                <div className={s.button} onClick={()=>follow(props.data.id)}>Follow</div>}
        </div>
    )
}

const Users = (props) => {
    //debugger;
    const setUsers = (users) => {
        props.setUsers(users);
        //return users.map(user => <User data={user} />)
    }
    const getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=100').then(response => {
            debugger;
            setUsers(response.data.items);
        })
    }
    let users = props.users.map(user => <User data={user} unfollow={props.unfollow} follow={props.follow}/>);
    return (
        
        <div className={s.users_wrapper}>
            <button onClick={getUsers}>get users</button>
            {users}
        </div>
    )
}

export default Users;