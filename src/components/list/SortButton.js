import React from "react"
import "../../styles/SortButton.sass"

export default class SortButton extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button className="sort-button">{this.props.sortBy}</button>
        )
    }
}
