import React from 'react'
import { Icon, Container, Divider, Grid, Header } from 'semantic-ui-react'

import { UserList} from '../../components/UserList'
import { UserAdd} from '../../components/UserAdd'
import { UserDetails} from '../../components/UserDetails'

import { UsersProvider } from '../../contexts/Users/provider' /* <===== import provider */

const TabDemo3 = () => {

    const users = [{ id: '1', name: 'uno'}, { id: '2', name: 'dos'}];
    const selectedUser = { id: '1', name: 'uno'};

    return (
        <Container>

            <Header as='h2' icon inverted textAlign='center'>
                <Icon name='code' />
                useContext
            </Header>
            
            <Divider />

<UsersProvider users={users} selectedUser={selectedUser}> {/* <===== provider */}

            <Grid container columns={2}>
                <Grid.Column>
                    <UserAdd/>
                </Grid.Column>

                <Grid.Column>
                    <div/>
                </Grid.Column>

                <Grid.Column>
                    <UserList/>
                </Grid.Column>
                
                <Grid.Column>
                    <UserDetails/>
                </Grid.Column>
            </Grid>
            
</UsersProvider>

        </Container>
    )}
export default TabDemo3
