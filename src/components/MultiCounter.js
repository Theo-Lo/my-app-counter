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
        this.setState({ size: size });
        this.setState({ sum: 0 });
        this.refs.counterGroup.resetCounter();
    }

    setSum = (sum) => {
        this.setState(({ sum: sum }));
    }


    render() {
        const size = this.state.size;
        return (
            <div>
                <CounterSizeGenerator size={this.updateCounterSize} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup ref="counterGroup" size={size} sum={this.setSum} />
            </div>
        );
    }
}

export default MultiCounter;