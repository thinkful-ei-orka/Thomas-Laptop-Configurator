import React from 'react';
import FeatureItem from './FeatureItem';

function FeatureList(props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = props.slug(JSON.stringify(item));
      return (
        <FeatureItem hash={itemHash} 
                     slug={props.slug} 
                     name={feature} 
                     select={props.selected} 
                     update={props.update} 
                     USFormat={props.USFormat} 
                     item={item}></FeatureItem>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return features;
}

export default FeatureList;