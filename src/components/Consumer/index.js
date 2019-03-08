import React from 'react';
import { Statistic, Card } from 'semantic-ui-react'

import { CounterContext } from '../../context' /* <===== import context */

export function Consumer() {
    
    return (
        <Card>
            <Card.Content>
                <Card.Header>Consumer</Card.Header>
            </Card.Content>

            {/* ===> context consumer */}
            
            <CounterContext.Consumer> 
                { count  =>
                <Card.Content extra textAlign='center'>
                    <Statistic>
                        <Statistic.Value>{count}</Statistic.Value> {/* <===== count state */}
                    </Statistic>
                </Card.Content>
                }
            </CounterContext.Consumer>

        </Card>

    )
}