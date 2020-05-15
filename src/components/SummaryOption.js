import React from 'react';

function SummaryOption(props) {
    return (
        <div className="summary__option" key={props.featureHash}>
          <div className="summary__option__label">{props.name} </div>
          <div className="summary__option__value">{props.option.name}</div>
          <div className="summary__option__cost">
            {props.USFormat.format(props.option.cost)}
          </div>
        </div>
    )
}

export default SummaryOption;