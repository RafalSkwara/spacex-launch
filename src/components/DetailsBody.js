import React from 'react';
import '../styles/DetailsBody.sass';
import dateF from 'date-fns';
import Counter from './Counter';
import {fetchLaunchData} from '../actions/actions';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        data: store
    }
})


export default class DetailsBody extends React.Component { // eslint-disable-line react/prefer-stateless-function

    componentWillMount() {
        this.props.dispatch(fetchLaunchData());
    }

    render() {
        let date = this.props.data.launch * 1000;
        const sec = Math.floor(Date.now()/1000);
        return (
            
            <section className={"details-body"}>
                <div>
                    launch: {this.props.data.launch} <br />
                    launchSite: {this.props.data.launchSite} <br />
                    rocket: {this.props.data.rocket}<br />
                    <p className={'details-body__par details-body__par--grey'}>{dateF.format(date, 'D MMMM YYYY')}</p>
                    <h2 className={'header_big'}>{this.props.data.rocket} launch</h2>
                    <Counter countFrom={(date/1000)} countTo={sec} />
                </div>
                <div className={"details-body__column--right"}>
                </div>
                
            </section>
        );
    }
}