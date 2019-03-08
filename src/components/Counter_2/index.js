import React, { useState, useContext  } from 'react';
import { Statistic, Card, Button } from 'semantic-ui-react'

export function Counter({ context }) { /* <===== parameter */
    
    const [count, setCount] = useContext(context) /* <===== use context */
    const [action, setLastAction] = useState('')

    return (
        <Card>
            <Card.Content>
                <Card.Header>Counter</Card.Header>
                <Card.Meta>
                    Last action: {action}
                </Card.Meta>
            </Card.Content>

            <Card.Content extra textAlign='center'>
                <Statistic>
                    <Statistic.Value>{count}</Statistic.Value>
                </Statistic>
                <div className='ui two buttons'>
                    <Button basic color='green' 
                            onClick={() => {setLastAction('+'), setCount(count + 1)}}>
                        +
                    </Button>
                    <Button basic color='red' 
                            onClick={() => {setLastAction('-'), setCount(count - 1)}}>
                        -
                    </Button>
                </div>
            </Card.Content>
        </Card>

    )
}