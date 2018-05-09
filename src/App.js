import { hot } from "react-hot-loader"
import * as React from "react"
import axios from "axios"
import LaunchDetails from "view/LaunchDetails"
import launch from "./assets/launch.json"
import launchSite from "./assets/launch_site.json"
import rocket from "./assets/rocket.json"
import dateF from "date-fns"

import "./styles/theme.sass"

class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    // componentWillMount() {
    //     axios.get('https://api.spacexdata.com/v2/launches/upcoming')
    //         .then( (response) => {
    //             console.log(response.data[0])
    //             this.setState( {
    //                 launch: response.data[0],
    //                 launchSite: response.data[0]['launch_site'],
    //                 rocket: response.data[0]['rocket'],
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <main>
                <LaunchDetails
                // launch={this.state.launch}
                // launchSite={this.state.launchSite}
                // rocket={this.state.rocket}
                />
            </main>
        )
    }
}

export default hot(module)(App)
