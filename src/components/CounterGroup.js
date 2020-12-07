import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: 0
        };
    }

    resetCounter() {
        for (var i = 0; i < this.props.size; i++) {
            this.refs[`counter${i}`].resetCounter();
        }
    }

    initArraySize = (size) => {
        const number = size.length > 0 && parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    };

    calculateSum = (valueChange) => {
        this.setState((prevState) => ({ sum: prevState.sum + valueChange }));
        this.props.sum(this.state.sum + valueChange);
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {initArraySize.map((value, index) =>
                    <Counter ref={`counter${index}`} key={value} valueChange={this.calculateSum} />
                )}
            </div>
        );
    }
}

export default CounterGroup;