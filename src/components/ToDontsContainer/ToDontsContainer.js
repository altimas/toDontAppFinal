import React from 'react';
import s from './ToDontsContainer.module.scss';

import ToDont from '../ToDont/ToDont';

const ToDontsContainer = ({ toDonts }) => {
    return (
        <div className={s.toDontsContainer}>
            {toDonts.map((item) => {
                return <ToDont name={item.name} />;
            })}
        </div>
    );
};

export default ToDontsContainer;
