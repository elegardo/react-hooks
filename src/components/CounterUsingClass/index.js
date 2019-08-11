import React from 'react'
import { Statistic, Card, Button } from 'semantic-ui-react'

export class CounterUsingClass extends React.Component {

    constructor(props) { /* <===== contructor */
        super(props);

        this.state = { /* <===== unique state */
            count: 0,
            action: ''
        }

        this.increment = this.increment.bind(this) /* <===== functions bindings */
        this.decrement = this.decrement.bind(this)
    }

    increment(){ /* <===== function for manage state */
        this.setState(prevState => { /* <===== manage async */
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement(){
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

	render(){
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Counter with class</Card.Header>
                    <Card.Meta>
                        Last action: {this.state.action} {/* <===== action state */}
                    </Card.Meta>
                </Card.Content>

                <Card.Content extra textAlign='center'>
                    <Statistic>
                        <Statistic.Value id='value'>{this.state.count}</Statistic.Value> {/* <===== count state */}
                    </Statistic>
                    <div className='ui two buttons'>
                        <Button id='button-plus' 
                                basic color='green' 
                                onClick={() => {this.setState({action: '+'}), this.increment()}}> {/* <===== action,count settings */}
                            +
                        </Button>
                        <Button id='button-minus' 
                                basic color='red' 
                                onClick={() => {this.setState({action: '-'}), this.decrement()}}> {/* <===== action,count settings */}
                            -
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }

}