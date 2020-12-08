import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: 0
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.size !== this.props.size) {
            this.setState({ sum: 0 });
        }
    }

    initArraySize = (size) => {
        const number = size.length > 0 && parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    };


    calculateSum = (valueChange) => {
        this.setState(
            prevState => (
                { sum: prevState.sum + valueChange }),
            () => this.props.setSum(this.state.sum)
        );
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {initArraySize.map((value) =>
                    <Counter size={size} key={value} calculateSum={this.calculateSum} />
                )}
            </div>
        );
    }
}

export default CounterGroup;