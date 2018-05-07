import React from 'react';
import '../styles/DetailsBody.sass';
import dateF from 'date-fns';
import Counter from './Counter';
import Details from "./Details";
import Rocket from "./Rocket";
import LaunchSite from "./LaunchSite";


export default class DetailsBody extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
    }

    render() {
        let date = this.props.launch["launch_date_unix"];
        const sec = Math.floor(Date.now()/1000);
        return <section className={"details-body"}>
                <div className={"details-body__column details-body__column--left"}>
                    <p
                        className={
                            "details-body__par details-body__par--grey"
                        }
                    >
                        {dateF.format(date * 1000, "D MMMM YYYY")}
                    </p>
                    <h2 className={"header_big"}>
                        {this.props.rocket.name} launch
                    </h2>
                    <Counter countFrom={date} countTo={sec} />
                    <img src={this.props.launch.links.mission_patch} />
                </div>
                <div className={"details-body__column details-body__column--right"}>
                    <Details launch={this.props.launch}/>
                    <Rocket rocket={this.props.rocket}/>
                    <LaunchSite launchSite={this.props.launchSite} />
                </div>
            </section>
    }
}