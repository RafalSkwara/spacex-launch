import React from 'react';
import '../styles/DetailsBody.sass';
import dateF from 'date-fns';
import Counter from './Counter';


export default class DetailsBody extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {
        const logo = require('../assets/img/space_x_logo_bw_centered.png');
        const date = this.props.launch;
        const mill = Date.now();
        return (
            
            <section className={"details-body"}>
                <div>
                    launch: {this.props.launch} <br />
                    launchSite: {this.props.launchSite} <br />
                    rocket: {this.props.rocket}<br />
                    <p className={'details-body__par details-body__par--grey'}>{dateF.format(this.props.launch, 'DD MMMM YYYY')}</p>
                    <h2 className={'header_big'}>{this.props.rocket} launch</h2>
                    <Counter countFrom={date+100} countTo={date} />
                </div>
                <div className={"details-body__column--right"}>
                </div>
                
            </section>
        );
    }
}