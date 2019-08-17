import React, { useState, useContext } from "react";
import { Input, Button } from 'semantic-ui-react'

import { UsersContext } from '../../contexts/Users/context' /* <===== import context */

export function UserAdd() {

  const [userName, setUserName] = useState("");
  const { addNewUser } = useContext(UsersContext);

  const handleChange = e => {
    setUserName(e.target.value);
  };

  return (
      <Input action={{ icon: 'search' }} 
            placeholder='Enter name' 
            value={userName}
            onChange={handleChange} 
            >
            <input />
            <Button type='submit'
                    disabled={!userName}
                    onClick={() => addNewUser(userName)}>
                Add
            </Button>
      </Input>
  );
}
