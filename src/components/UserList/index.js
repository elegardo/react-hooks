import React, { useContext } from "react";
import { List, Segment } from 'semantic-ui-react'

import { UsersContext } from '../../contexts/Users/context' /* <===== import context */

export function UserList() {
    
  const usersContext = useContext(UsersContext);
  const { users, setSelectedUser } = usersContext;

  return (
      <div>
      {users.length > 0? (
        <Segment padded>
          <List divided selection verticalAlign='middle'>
          {users.map(user => {
            return (
              <List.Item key={user.id}>
                <List.Icon name='users' size='large' verticalAlign='middle'/>
                <List.Content>
                  <List.Header as='a' 
                              onClick={() => setSelectedUser(user)}>
                    {user.name}
                  </List.Header>
                </List.Content>
              </List.Item>
            );
          })}
          </List>
        </Segment>
      ) : (
        <div/>
      )}
      </div>
  );
}