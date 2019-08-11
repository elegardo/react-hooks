import React from 'react';
import { Statistic, Card } from 'semantic-ui-react'

import { CounterConsumer } from '../../contexts/Counter/consumer' /* <===== import consumer */

export function CounterWithConsumer() {
    
    return (
        <Card>
            <Card.Content>
                <Card.Header>Consumer</Card.Header>
            </Card.Content>

            {/* ===> context consumer */}
            
            <CounterConsumer> 
                { count  =>
                <Card.Content extra textAlign='center'>
                    <Statistic>
                        <Statistic.Value>{count}</Statistic.Value> {/* <===== count state */}
                    </Statistic>
                </Card.Content>
                }
            </CounterConsumer>

        </Card>

    )
}