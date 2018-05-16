import React from "react"
import "../../styles/FilterButtons.sass"

export default class FilterButtons extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }


    render() {
        return <div className={"sort-buttons"}>
                <button className={"sort-buttons_button"} onClick={this.props.onChange}>
                    All Rockets
                </button>
                {this.props.options.map(option => {
                    return <button className={"sort-buttons_button"} value={option} onClick={this.props.onChange}>
                            {option}
                        </button>
                })}
            </div>
    }
}
