import React from 'react'
import { Icon, Container, Divider, Grid, Header } from 'semantic-ui-react'

import { CounterUsingFunction } from '../../components/CounterUsingFunction'
import { CounterUsingClass } from '../../components/CounterUsingClass'

const TabDemo1 = () => (
    <Container>

        <Header as='h2' icon inverted textAlign='center'>
            <Icon name='code' />
            useState
        </Header>
        
        <Divider />

        <Grid container columns={3}>
            <Grid.Column>
                <CounterUsingFunction/>
            </Grid.Column>

            <Grid.Column>
                <CounterUsingFunction/>
            </Grid.Column>
            
            <Grid.Column>
                <CounterUsingClass/>
            </Grid.Column>
        </Grid>

    </Container>
)

export default TabDemo1  