import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 0,
            sum: 0
        };
    }

    updateCounterSize = (size) => {
        this.setState({
            size: size,
            sum: 0
        });
    }

    setSum = (sum) => {
        this.setState(({ sum: sum }));
    }

    render() {
        const size = this.state.size;
        return (
            <div>
                <CounterSizeGenerator updateCounterSize={this.updateCounterSize} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={size} setSum={this.setSum} />
            </div>
        );
    }
}

export default MultiCounter;