import React from "react"
import "../styles/Footer.sass"

export default class Footer extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
        return (
            <footer className={"footer"}>
                <div className={"footer__links"}>
                    <a className={"footer__link footer__link--dark"} href={"#"}>Follow SpaceX</a>
                    <span>&nbsp;|&nbsp;</span>
                    <a className={"footer__link"} href={"#"}>Twitter</a>
                    <a className={"footer__link"} href={"#"}>YouTube</a>
                    <a className={"footer__link"} href={"#"}>Flickr</a>
                    <a className={"footer__link"} href={"#"}>Instagram</a>
                </div>
                <p>2018 Space Exploration Technologies Corp.</p>
            </footer>
        )
    }
}
