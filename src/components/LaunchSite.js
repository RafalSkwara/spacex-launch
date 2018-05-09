import React from "react"
import "../styles/LaunchSite.sass"

export default class LaunchSite extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props)
    }

    render() {
        // data extracted from JSON in props:
        // const fullName = this.props.launchSite['full_name'];
        // const name = this.props.launchSite.location.name;
        // const region = this.props.launchSite.location.region;
        // const details = this.props.launchSite.details;

        return <div className={"launchsite-block"}>
                <h3> Launch Site </h3>
                <div className={"launchsite__column"}>
                    <div className={"subcolumn--left"}>Name:</div>
                    <div className={"subcolumn--right"}>
                        {this.props.launchSite["site_name_long"]
                            ? this.props.launchSite["site_name_long"]
                            : null}
                    </div>
                </div>
                <div className={"launchsite__column"}>
                    <div className={"subcolumn--left"}>
                        {this.props.launchSite.location
                            ? "Location:"
                            : "Launch Site Code:"}
                    </div>
                    <div className={"subcolumn--right"}>
                        {this.props.launchSite.location
                            ? this.props.launchSite.location.name +
                              ", <br /> " +
                              this.props.launchSite.location.region
                            : this.props.launchSite.site_id}
                    </div>
                </div>
                <p className={"launchsite__additional-info launchsite-block__par"}>
                    {this.props.launchSite.additional_info
                        ? this.props.launchSite.additional_info
                        : 'No more information about the launch site available.'}
                </p>
            </div>
    }
}
