import React from 'react';

function FeatureItem(props) {

    return (
        <div key={props.hash} className="feature__item">
            <input
              type="radio"
              id={props.hash}
              className="feature__option"
              name={props.slug(props.name)}
              checked={props.item.name === props.select[props.name].name}
              onChange={e => props.update(props.name, props.item)}
            />
            <label htmlFor={props.hash} className="feature__label">
              {props.item.name} ({props.USFormat.format(props.item.cost)})
            </label>
          </div>
    )
}

export default FeatureItem;