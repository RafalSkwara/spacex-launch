import React from 'react'
import '../styles/LaunchSite.sass'

export default class LaunchSite extends React.Component { // eslint-disable-line react/prefer-stateless-function   

    constructor(props) {
        super(props);
    }

    render() {
        // data extracted from JSON in props:
        // const fullName = this.props.launchSite['full_name'];
        // const name = this.props.launchSite.location.name;
        // const region = this.props.launchSite.location.region;
        // const details = this.props.launchSite.details;

        return (<div className={'launchsite-block'}>
            <h3> Launch Site </h3>
            <div className={'launchsite__column'}>
                <div className={'subcolumn--left'}>Name:</div>
                <div className={'subcolumn--right'}>
                    {/* {fullName} */}
                </div>
            </div>
            <div className={'launchsite__column'}>
                <div className={'subcolumn--left'}>Location:</div>
                <div className={'subcolumn--right'}>
                    {/* {name}, <br />
                    {region} */}
                </div>
            </div>
            <p className={'launchsite__additional-info launchsite-block__par'}> 
            {/* {details} */}
            </p>
        </div>)
    }
}
