import React from 'react';
import User from './User';
import { connect } from 'react-redux'

const UsersList = (props) => {
    console.log( 'user list ')
    console.log('props.users', props.users)

    return (
        
        <div>
            { props.users && props.users.map((user) => <User key={user.login.uuid} {...user} /> ) }
        </div>
    );
};

// Esta parte no entendi bien ???
const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default  connect(mapStateToProps)(UsersList);