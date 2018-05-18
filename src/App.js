import { hot } from 'react-hot-loader';
import * as React from 'react';
// import axios from 'axios';
import LaunchDetails from 'view/LaunchDetails';
// import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';

import launches from "./assets/launches.json";
import LaunchesList from "view/LaunchesList";
import axios from 'axios';
import dateF from 'date-fns';

import "./styles/theme.sass"

class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props)
        this.state = {
			viewName: "list",
			data: launches //default state

        }
        this.handleLaunchClick = this.handleLaunchClick.bind(this)
        this.handleBackClick = this.handleBackClick.bind(this)
    }

	componentWillMount() {
		let fetchedData;
		axios.get('https://api.spacexdata.com/v2/launches')
			.then((response) => {
				this.setState({
					data: response.data
				})
				console.log(response.data) 
			})
			.catch((error) => console.log(error));
		
	}

    get activeViewComponent() {
        const { viewName } = this.state

        switch (viewName) {
            case "list":
                return (
                    <LaunchesList
                        launches={this.state.data}
                        onLaunchClick={this.handleLaunchClick}
                    />
                )

            case "details":
                return (
                    <LaunchDetails
                        launch={launch}
                        launchSite={launchSite}
                        rocket={rocket}
                        onBackClick={this.handleBackClick}
                    />
                )

            default:
                return null
        }
    }

    handleLaunchClick() {
        this.setState({ viewName: "details" })
        window.scrollTo(0, 0);
    }

    handleBackClick() {
        this.setState({ viewName: "list" })
    }

    render() {
        return <main>{this.activeViewComponent}</main>
    }
}

export default hot(module)(App);
