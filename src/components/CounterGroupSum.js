import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                the sum: {this.props.sum}
            </div>
        );
    }
}

export default CounterGroupSum;