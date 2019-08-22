import React, { useState } from 'react';
import { UsersContext } from './context'

const UsersProvider = props => {

    // Initial values are obtained from the props
    const {
      users: initialUsers,
      selectedUser: initialSelectedUser,
      children
    } = props;
  
    // Use State to keep the values
    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState(initialSelectedUser);
  
    const addNewUser = userName => {
      const newUser = { 
                id: users.length+1, 
                name: userName
              };
      setUsers(users.concat([newUser]));
    };
  
    // Make the context object:
    const usersContext = {
      users,
      setUsers,
      selectedUser,
      setSelectedUser,
      addNewUser
    };
  
    // pass the value in provider and return
    return <UsersContext.Provider value={usersContext}>{children}</UsersContext.Provider>;
  };

export { UsersProvider };
