import React from "react"
import dateF from "date-fns"

import "../../styles/ListItem.sass"

export default class ListItem extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={"item"} number={"flight.flight_number"} onClick={this.props.onLaunchClick}>
                <p className={"item__date"}>
                    {dateF.format(
                        this.props.flight.launch_date_unix * 1000,
                        "DD MMMM YYYY"
                    )}
                </p>
                <div className={"item__arrow"}>
                    <div className={"item__arrow__line"} />
                    <div className={"item__arrow__pointer"} />
                </div>
                <p className={"item__mini-details"}>
                    <span>rocket: </span>
                    {this.props.flight.rocket.rocket_name}
                    <span> | Launch Site: </span>
                    {this.props.flight.launch_site.site_name_long}
                </p>
            </div>
    }
}
