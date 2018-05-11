import React from "react"
import HeroSection from "../components/list/HeroSection"
import ListSection from "../components/list/ListSection"
import Footer from "../components/Footer"
import "../styles/LaunchesList.sass"

export default class LaunchesList extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="launches-wrapper">
                <HeroSection />
                <ListSection launches={this.props.launches} onLaunchClick={this.props.onLaunchClick}/>
                <Footer />
            </div>
        )
    }
}
