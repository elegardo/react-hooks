import React, { useState, useContext  } from 'react';
import { Statistic, Card, Button } from 'semantic-ui-react'

import { CounterContext } from '../../contexts/CounterContext' /* <===== import context */

export function CounterWithUseContext() {
    
    const [count, setCount] = useContext(CounterContext) /* <===== use context */
    const [internal, setInternal] = useState(0)          /* <===== internal state */

    return (
        <Card>
            <Card.Content>
                <Card.Header>Counter</Card.Header>
                <Card.Meta>
                    Internal: {internal} {/* <===== internal state */}
                </Card.Meta>
            </Card.Content>

            <Card.Content extra textAlign='center'>
                <Statistic>
                    <Statistic.Value>{count}</Statistic.Value> {/* <===== count state */}
                </Statistic>
                <div className='ui two buttons'>
                    <Button basic color='green' 
                            onClick={() => {setInternal(internal + 1), setCount(count + 1)}}> {/* <===== internal,count settings */}
                        +
                    </Button>
                    <Button basic color='red' 
                            onClick={() => {setInternal(internal - 1), setCount(count - 1)}}> {/* <===== internal,count settings */}
                        -
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}