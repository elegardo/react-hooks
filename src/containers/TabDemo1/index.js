import React from 'react'
import { Icon, Container, Divider, Grid, Header } from 'semantic-ui-react'

import { CounterWithInnerState } from '../../components/CounterWithInnerState'
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
                <CounterWithInnerState/>
            </Grid.Column>

            <Grid.Column>
                <CounterWithInnerState/>
            </Grid.Column>
            
            <Grid.Column>
                <CounterUsingClass/>
            </Grid.Column>
        </Grid>

    </Container>
)

export default TabDemo1  