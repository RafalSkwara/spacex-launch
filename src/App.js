import { hot } from "react-hot-loader";
import * as React from "react";
import axios from "axios";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLaunchData, showList, showDetails } from './actions/actions';

import LaunchDetails from "view/LaunchDetails";
import LaunchesList from "view/LaunchesList";
import launch from "./assets/launch.json";
import launchSite from "./assets/launch_site.json";
import rocket from "./assets/rocket.json";
import dateF from "date-fns";

import "./styles/theme.sass"

const mapStateToProps = state => ({
	viewName: state.viewName,
	launches: state.launches,
	launch: state.launch,
	fetched: state.fetched
})
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchLaunchData: fetchLaunchData,
		showList: showList,
		showDetails: showDetails
	}, dispatch);
}

class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    componentWillMount() {
		if(!this.props.fetched){
			this.props.fetchLaunchData();
		}
    }


    render() {
		if(this.props.fetched === false) {
			return (<div style={{backgroundColor: 'red', width: '100vw', height: '100vh', fontSize: 50, color: 'black'}}>Loading</div>);
		} else {
			switch(this.props.viewName) {
			case 'details':

				return (
					<main>
						<LaunchDetails />
					</main>
				)
			case 'list':
				return (
					<main>
						<LaunchesList />
					</main>
				)
			default:
				return null;
		}
		}
		
		
        
    }
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))
