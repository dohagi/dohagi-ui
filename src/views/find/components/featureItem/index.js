import React from 'react';

import css from './style.css';

const FeatureItem = ({ selected, name, onItemClicked }) => (
    <span
        className={css.wrap + ' ' + (selected ? css.selected : '')}
        onClick={() => onItemClicked(name)}>
        {name}
    </span>
);

export default FeatureItem;