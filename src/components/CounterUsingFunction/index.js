import React, { useState } from 'react'
import { Statistic, Card, Button } from 'semantic-ui-react'

export function CounterUsingFunction() {

    const [count, setCount] = useState(0)         /* <===== count state */
    const [action, setLastAction] = useState('')  /* <===== action state */

    return (
        <Card>
            <Card.Content>
                <Card.Header>Counter with function</Card.Header>
                <Card.Meta>
                    Last action: {action} {/* <===== action state */}
                </Card.Meta>
            </Card.Content>

            <Card.Content extra textAlign='center'>
                <Statistic>
                    <Statistic.Value id='value'>{count}</Statistic.Value> {/* <===== count state */}
                </Statistic>
                <div className='ui two buttons'>
                    <Button id='button-plus' 
                            basic color='green' 
                            onClick={() => {setLastAction('+'), setCount(count => count + 1)}}> {/* <===== action,count settings */}
                        +
                    </Button>
                    <Button id='button-minus' 
                            basic color='red' 
                            onClick={() => {setLastAction('-'), setCount(count => count - 1)}}> {/* <===== action,count settings */}
                        -
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}