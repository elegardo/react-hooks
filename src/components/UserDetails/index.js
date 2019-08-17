import React, { useContext } from "react";
import { Card, Icon } from 'semantic-ui-react'

import { UsersContext } from '../../contexts/Users/context' /* <===== import context */

export function UserDetails() {
  //get the selected user from the usersContext
  const { selectedUser } = useContext(UsersContext);

  return (
    <div>
      {selectedUser && selectedUser.name ? (
      <Card>
          <Card.Content>
              <Card.Header>{selectedUser.name}</Card.Header>
              <Card.Meta>Joined in 2019</Card.Meta>
              <Card.Description>
                  User description.
              </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <a><Icon name='user'/>{selectedUser.id}</a>
          </Card.Content>
      </Card>
      ) : (
        <div/>        
      )}
    </div>
  );
}
