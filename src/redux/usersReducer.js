const FOLLOW =  'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

let initialState = {
    dataUsers: [
        // { id: '1', name: 'Pavel', status: "i'm okey!", followed: false },
        // { id: '2', name: 'Pavel', status: "i'm okey!", followed: false },
        // { id: '3', name: 'Pavell', status: "i'm ookey!", followed: true },
    ],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            //if (state.newTextMessage === '') return state;
            return {
                ...state,
                dataUsers: state.dataUsers.map(user => {
                    if (user.id === action.id)
                        return {...user, followed: true};
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                dataUsers: state.dataUsers.map(user => {
                    if (user.id === action.id)
                        return {...user, followed: false};
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                dataUsers: action.users,
            }
        }
        default:
            return state;
    }
}

export default usersReducer;