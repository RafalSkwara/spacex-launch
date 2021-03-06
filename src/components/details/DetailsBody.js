import React from "react"
import "../../styles/DetailsBody.sass"
import dateF from "date-fns"
import Counter from "./Counter"
import Details from "./Details"
import Rocket from "./Rocket"
import LaunchSite from "./LaunchSite"
import { fetchLaunchData } from "../../actions/actions"
import { connect } from "react-redux"

const mapStateToProps = (store) => {
    return {
		data: store,
		launch: store.launch,
		rocket: store.launch.rocket,
		launchSite: store.launch.launch_site
    };
};


 class DetailsBody extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
    }

    render() {
        let date = this.props.launch["launch_date_unix"]
        let emergencyImg = require("../../assets/img/space_x_logo_bw_centered.svg")
        const sec = Math.floor(Date.now() / 1000)
        return (<section className={"details-body"}>
            <div className={"details-body__column details-body__column--left"}>
                <p  className={ "details-body__par details-body__par--grey" }>
                    {dateF.format(date * 1000, "D MMMM YYYY")}
                </p>
                <h2 className={"header_big"}>
                    {this.props.rocket["rocket_name"]} launch
                </h2>
                {
					this.props.launch["launch_date_unix"] ? <Counter countFrom={date} countTo={sec} /> : null
				}
				{
					this.props.launch.links['mission_patch'] ? <img src={this.props.launch.links['mission_patch']}/> :null
				}
            </div>
            <div className={"details-body__column details-body__column--right"}>
                <Details launch={this.props.launch} />
                	{
						this.props.data ? <Rocket rocket={this.props.rocket} /> : null
					}
                <LaunchSite launchSite={this.props.launchSite} />
            </div>
        </section>)
    }
}
export default connect(mapStateToProps)(DetailsBody)