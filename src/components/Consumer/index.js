import React from 'react';
import { Statistic, Card } from 'semantic-ui-react'

import { CounterContext } from '../context'

export function Consumer() {
    
    return (
        <Card>
            <Card.Content>
                <Card.Header>Consumer</Card.Header>
            </Card.Content>

            <CounterContext.Consumer>
                { count  =>
                <Card.Content extra textAlign='center'>
                    <Statistic>
                        <Statistic.Value>{count}</Statistic.Value>
                    </Statistic>
                </Card.Content>
                }
            </CounterContext.Consumer>
        </Card>

    )
}