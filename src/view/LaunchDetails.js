import React from 'react';
import DetailsHeader from '../components/DetailsHeader';

import './LaunchDetails.sass';

export default class LaunchDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div className="details-wrapper">
                <DetailsHeader />
                Launch: {this.props.launch} <br />
                Launch site: {this.props.launchSite} <br />
                Rocket: {this.props.rocket} <br />
            </div>
        );
    }
}