import React from 'react';
import DetailsHeader from '../components/DetailsHeader';
import DetailsBody from '../components/DetailsBody';


import '../styles/LaunchDetails.sass';

export default class LaunchDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="details-wrapper">
                <DetailsHeader />
                <DetailsBody 
                    launch={this.props.launch}
                    launchSite={this.props.launchSite}
                    rocket={this.props.rocket.name}/>
            </div>
        );
    }
}