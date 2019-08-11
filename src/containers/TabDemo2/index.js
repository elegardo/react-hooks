import React from 'react'
import { Icon, Container, Divider, Grid, Header } from 'semantic-ui-react'

import { CounterProvider } from '../../contexts/CounterContext' /* <===== import context */
import { CounterWithUseContext as Counter } from '../../components/CounterWithUseContext'
import { Consumer } from '../../components/Consumer'

const TabDemo2 = () => { 

    return (
        <Container>

            <Header as='h2' icon inverted textAlign='center'>
                <Icon name='code' />
                useState & useContext
            </Header>
            
            <Divider />

<CounterProvider> {/* <===== context */}

            <Grid container columns={3}>
                <Grid.Column>
                    <Counter/> {/* <==== counter with context */} 
                </Grid.Column>

                <Grid.Column>
                    <Counter/> {/* <==== counter with context */}
                </Grid.Column>
                
                <Grid.Column>
                    <Consumer/> {/* <==== consumer */}
                </Grid.Column>
            </Grid>
            
</CounterProvider>

        </Container>
    )}
export default TabDemo2 
