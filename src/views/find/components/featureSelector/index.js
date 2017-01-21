import React from 'react';
import FeatureItem from '../featureItem';

import css from './style.css';

class FeatureSelector extends React.Component {
    constructor() {
        super();

        this.onFeatureClicked = this.onFeatureClicked.bind(this);
    }

    onFeatureClicked(name) {
        this.props.onFeatureClicked(name);
    }

    render() {
        let { features } = this.props;
        
        return (
            <div className={css.wrap}>
                {features.map((feature) => (
                    <FeatureItem
                        key={feature.name}
                        {...feature}
                        onItemClicked={this.onFeatureClicked} />
                ))}
            </div>
        )
    }
}

export default FeatureSelector;