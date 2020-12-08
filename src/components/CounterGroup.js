import React, { Component } from 'react';
import CounterContainer from "../containers/CounterContainer"
import {v4 as uuidv4} from "uuid";

class CounterGroup extends Component {
    initArraySize = (size) => {
        const number = size.length > 0 && parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    };

    render() {
        const initArraySize = this.initArraySize(this.props.counterSize);

        return (
            <div>
                {initArraySize.map(() =>
                    <CounterContainer key={uuidv4()} />
                )}
            </div>
        );
    }
}

export default CounterGroup;