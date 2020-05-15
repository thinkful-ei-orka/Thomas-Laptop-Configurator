import React from 'react';
import SummaryOption from './SummaryOption';

function SummaryList(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];

        return (
            <SummaryOption name={feature} 
            option={selectedOption} 
            hash={featureHash} 
            USFormat={props.USFormat} />
        );
    });

    return summary;
}

export default SummaryList;