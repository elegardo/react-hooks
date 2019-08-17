import React from 'react'
import { Icon, Container, Divider, Grid, Header } from 'semantic-ui-react'

import { CounterWithContext} from '../../components/CounterWithContext'
import { CounterWithConsumer } from '../../components/CounterWithConsumer'

import { CounterProvider } from '../../contexts/Counter/provider' /* <===== import provider */

const TabDemo2 = () => { 

    return (
        <Container>

            <Header as='h2' icon inverted textAlign='center'>
                <Icon name='code' />
                useContext
            </Header>
            
            <Divider />

<CounterProvider> {/* <===== provider */}

            <Grid container columns={3}>
                <Grid.Column>
                    <CounterWithContext/> {/* <==== counter with context */} 
                </Grid.Column>

                <Grid.Column>
                    <CounterWithContext/> {/* <==== counter with context */}
                </Grid.Column>
                
                <Grid.Column>
                    <CounterWithConsumer/> {/* <==== counter consumer */}
                </Grid.Column>
            </Grid>
            
</CounterProvider>

        </Container>
    )}
export default TabDemo2 
