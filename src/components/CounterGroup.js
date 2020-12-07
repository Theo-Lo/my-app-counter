import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {
    initArraySize = (size) => {
        return Array.from(Array(size).keys());
    };

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {
                    initArraySize.map((value) =>
                        <Counter key={value} />
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;