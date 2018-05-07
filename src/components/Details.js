import React from "react"
import "../styles/Details.sass"

export default class Details extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
        return <div className={"details-block"}>
                <h3> Details </h3>
                <p className={"details-block__par"}>
                    {this.props.launch.details}
                </p>
            </div> 
    }
}
