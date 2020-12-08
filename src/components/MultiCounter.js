import React, { Component } from 'react';
import CounterGroupContainer from '../containers/CounterGroupContainer';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';

class MultiCounter extends Component {
    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContainer />
                <CounterGroupContainer />
            </div>
        );
    }
}

export default MultiCounter;