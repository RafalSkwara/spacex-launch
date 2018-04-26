import { hot } from 'react-hot-loader';
import * as React from 'react';
import axios from 'axios'
import LaunchDetails from 'view/LaunchDetails';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';


import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            launch: '',
            launchSite: '',
            rocket: '',
            rocket2 : ''
        }
    }

    componentDidMount() {
        this.setState({
            launch: (launch.launch_date_unix),
            launchSite: '',
            rocket: ''
        })
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <main>
                <LaunchDetails
                    launch={this.state.launch}
                    launchSite={this.state.launchSite}
                    rocket={this.state.rocket}
                />
            </main>
        );
    }
}

export default hot(module)(App);
