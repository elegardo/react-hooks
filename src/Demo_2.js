import React, { useState }  from 'react'
import { Icon, Container, Divider, Grid, Header, Button, Card } from 'semantic-ui-react'

import { Counter } from './components/Counter_2'
import { CounterContext } from './components/context'

import { Consumer } from './components/Consumer'

const Demo = () => { 

    const [count, setCount] = useState(0);
    const [action, setLastAction] = useState('')

    return (
        <Container>

            <Header as='h2' icon inverted textAlign='center'>
                <Icon name='code' />
                    Demo 2
            </Header>
            
            <Divider />

            <CounterContext.Provider value={[count, setCount]}>
            <Grid container columns={1}>
                <Grid.Column>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Parent: {count}</Card.Header>
                            <Card.Meta>
                                Last action: {action}
                            </Card.Meta>
                        </Card.Content>

                        <Card.Content>
                            <Grid container columns={3}>
                                <Grid.Column>
                                    <Counter context={CounterContext}/>
                                </Grid.Column>

                                <Grid.Column>
                                    <Counter context={CounterContext}/>
                                </Grid.Column>

                                <Grid.Column>
                                    <Consumer/>
                                </Grid.Column>
                            </Grid>
                        </Card.Content>


                        <Card.Content extra textAlign='center'>
                            <div className='ui two buttons'>
                            
                                <Button basic color='green' onClick={() => {setLastAction('+'), setCount(count + 1)}}>
                                    +
                                </Button>
                                <Button basic color='red' onClick={() => {setLastAction('-'), setCount(count - 1)}}>
                                    -
                                </Button>
                                
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
            </CounterContext.Provider>

        </Container>
    )}
export default Demo 
