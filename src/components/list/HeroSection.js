import React from "react"
import "../../styles/HeroSection.sass"

export default class HeroSection extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }

    render() {
        const logo = require('../../assets/img/space_x_logo_bw_centered.svg')
        return <section className={"hero"}>
                <div className={"hero__flex-row hero__flex-row--top"}>
                    <img className={"hero__logo"} src={logo} />
                    <p className={"hero__par"}>Launches 2018</p>
                </div>
            </section>
    }
}
