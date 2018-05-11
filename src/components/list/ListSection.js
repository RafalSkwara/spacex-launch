import React from "react"
import dateF from 'date-fns'

import "../../styles/ListSection.sass"


export default class ListSection extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }

    getItems() {
        return this.props.launches.map(flight => {
            return <div className={"item"} number={"flight.flight_number"}>
                    <p className={"item__date"}>
                        {dateF.format(
                            flight.launch_date_unix * 1000,
                            "DD MMMM YYYY"
                        )}
                    </p>
                    <div className={"item__arrow"} >
                        <div className={"item__arrow__line"} />
                        <div className={"item__arrow__pointer"} />
                    </div>
                    <p className={"item__mini-details"}>
                        <span>rocket: </span>
                        {flight.rocket.rocket_name}
                        <span> | Launch Site: </span>
                        {flight.launch_site.site_name_long}
                    </p>
                </div>
         })
    }

    render() {
        const logo = require("../../assets/img/space_x_logo_bw_centered.svg")
        return (
            <section className={"list"} >
                {
                   this.getItems()
                }
            </section>
        )
    }
}
