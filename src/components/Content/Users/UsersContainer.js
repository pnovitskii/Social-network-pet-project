import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.dataUsers,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        follow: ( user_id ) => { dispatch( followAC( user_id ) ) },
        unfollow: (user_id) => { dispatch( unfollowAC( user_id ) ) },
        setUsers: ( users ) => { dispatch( setUsersAC( users ) ) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;