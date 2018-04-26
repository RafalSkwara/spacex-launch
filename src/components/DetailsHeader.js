import React from 'react';
import './DetailsHeader.sass';

export default class DetailsHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
    
    render() {
        const logo = require('../assets/img/space_x_logo_bw_centered.png');
        return (
          <div className="details-header">
            <div className="details-header__column details-header__column--25">
                <button>Go back</button>
            </div>
            <div className="details-header__column details-header__column--50">
              <img src={logo} />
            </div>
                    <div className="details-header__column details-header__column--25"></div>
            </div>
        );
    }
}
