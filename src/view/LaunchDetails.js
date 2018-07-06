import React from 'react';

import DetailsHeader from '../components/details/DetailsHeader';
import DetailsBody from '../components/details/DetailsBody';
import MissionLinks from "../components/details/MissionLinks";
import Footer from "../components/details/Footer";

import '../styles/LaunchDetails.sass';

class LaunchDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="details-wrapper">
                <DetailsHeader />
                <DetailsBody />
                <MissionLinks />
                <Footer />
            </div>
        );
    }
}

export default LaunchDetails;