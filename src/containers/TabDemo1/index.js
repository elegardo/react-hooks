import React from 'react'
import { Icon, Container, Divider, Grid, Header } from 'semantic-ui-react'

import { CounterWithUseState as Counter } from '../../components/CounterWithUseState'

const TabDemo1 = () => (
    <Container>

        <Header as='h2' icon inverted textAlign='center'>
            <Icon name='code' />
            useState
        </Header>
        
        <Divider />

        <Grid container columns={3}>
            <Grid.Column>
                <Counter/>
            </Grid.Column>

            <Grid.Column>
                <Counter/>
            </Grid.Column>
            
            <Grid.Column>
                <Counter/>
            </Grid.Column>
        </Grid>

    </Container>
)

export default TabDemo1  