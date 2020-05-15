import React from 'react';
import SummaryOption from './SummaryOption';

function MainSummary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];

        return (
            <SummaryOption name={feature} option={selectedOption} hash={featureHash} USFormat={props.USFormat} />
        );
    });

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {props.USFormat.format(total)}
                </div>
            </div>
        </section>
    )
}

export default MainSummary;