import React from 'react';
import User from "../user/User";

const Users = () => {
    return (
        <div>
            {user.map(value => (<User user={user} key={user.id}/>))}
        </div>
    );
};

export default Users;