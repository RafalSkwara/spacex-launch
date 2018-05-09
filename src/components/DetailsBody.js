import React from "react"
import "../styles/DetailsBody.sass"
import dateF from "date-fns"
import Counter from "./Counter"
import Details from "./Details"
import Rocket from "./Rocket"
import LaunchSite from "./LaunchSite"
import { fetchLaunchData } from "../actions/actions"
import { connect } from "react-redux"

@connect(store => {
    return {
        data: store,
    }
})
export default class DetailsBody extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.dispatch(fetchLaunchData())
    }

    render() {
        let date = this.props.data.launch["launch_date_unix"]
        let emergencyImg = require("../assets/img/space_x_logo_bw_centered.svg")
        const sec = Math.floor(Date.now() / 1000)
        return (<section className={"details-body"}>
            <div className={"details-body__column details-body__column--left"}>
                <p
                    className={
                        "details-body__par details-body__par--grey"
                    }
                >
                    {dateF.format(date * 1000, "D MMMM YYYY")}
                </p>
                <h2 className={"header_big"}>
                    {this.props.data.rocket["rocket_name"]} launch
                </h2>
                {this.props.data.launch["launch_date_unix"] ? <Counter countFrom={date} countTo={sec} /> : null}

                {/* {this.ShouldPatchRender()} */}
            </div>
            <div className={"details-body__column details-body__column--right"}>
                <Details launch={this.props.data.launch} />
                {this.props.data ? <Rocket rocket={this.props.data.rocket} /> : null}

                <LaunchSite launchSite={this.props.data.launchSite} />
            </div>
        </section>)
    }
}
