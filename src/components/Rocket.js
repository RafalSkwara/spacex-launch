import React from "react"
import "../styles/Rocket.sass"

export default class Rocket extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
        return <div>
                    <h3> Rocket </h3>
                    <p>{this.props.rocket.name}</p>
                </div>
    }
}
