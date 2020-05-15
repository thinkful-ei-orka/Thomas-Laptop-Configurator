import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryList from './SummaryList';

function MainSummary(props) {


    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryList selected={props.selected}
                         USFormat={props.USFormat}></SummaryList>
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