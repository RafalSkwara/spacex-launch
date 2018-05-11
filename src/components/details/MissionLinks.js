import React from "react"
import "../../styles/MissionLinks.sass"

export default class MissionLinks extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
        return <section className={"mission-links"}>
                <div className="mission-links__top"></div>
                <div className="mission-links__bottom">
                    <h2> Mission Links </h2>
                    <a href={"#"}>Reddit Campaign</a>
                    <a href={"#"}>Presskit</a>
                    <a href={"#"}>Mission Video</a>
                </div>
            </section>
    }
}
