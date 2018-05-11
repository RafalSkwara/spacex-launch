import React from "react"
import dateF from 'date-fns'
import ListItem from './ListItem'
import "../../styles/ListSection.sass"


export default class ListSection extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }

    getItems() {
        return this.props.launches.map((flight) => {
            return <div className="item-wrapper">
                    <ListItem flight={flight} onLaunchClick={this.props.onLaunchClick} />
                    <div className={"separator"} />
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
