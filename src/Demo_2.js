import React, { useState }  from 'react'
import { Icon, Container, Divider, Grid, Header, Button, Card, Statistic } from 'semantic-ui-react'

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
                useState & useContext
            </Header>
            
            <Divider />

            <CounterContext.Provider value={[count, setCount]}>
            <Grid container columns={1}>
                <Grid.Column>
                    <Card fluid>
                        <Card.Content extra textAlign='center'>
                            <Card.Header>
                                <Header as='h2'>Counter</Header>
                            </Card.Header>
                            <Card.Meta>
                                Last action: {action}
                            </Card.Meta>
                            <Statistic>
                                <Statistic.Value>{count}</Statistic.Value>
                            </Statistic>
                        </Card.Content>

                        <Card.Content extra textAlign='center'>
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
                            
                                <Button color='green' 
                                        onClick={() => {setLastAction('+'), setCount(count + 1)}}>
                                    +
                                </Button>
                                <Button  color='red' 
                                        onClick={() => {setLastAction('-'), setCount(count - 1)}}>
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
