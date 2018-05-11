import React from "react"
import HeroSection from "../components/list/HeroSection"
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
                <Footer />
            </div>
        )
    }
}
