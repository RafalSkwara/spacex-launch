import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLaunchData, showList, showDetails } from '../actions/actions';
import HeroSection from "../components/list/HeroSection";
import FilterButtons from "../components/list/FilterButtons";
import ListItem from "../components/list/ListItem";
import Footer from "../components/details/Footer";

import "../styles/LaunchesList.sass";

const mapStateToProps = store => {
	return {
		launch: store.launch,
		launches: store.launches
	};
};
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		showDetails: showDetails
	}, dispatch);
};


class LaunchesList extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
	super(props)
	this.state = {
	  rocketNameFilter: null,
	}
	this.handleFilterChange = this.handleFilterChange.bind(this);
	this.handleLaunchClick = this.handleLaunchClick.bind(this);
  }

  get availableRocketNames() {
	const { launches } = this.props;

	const rocketNames = []
	// get all names from launches
	launches.map((launch) => {
	  if (!rocketNames.includes(launch.rocket.rocket_name)) {
		rocketNames.push(launch.rocket.rocket_name);
	  }
	});
	return rocketNames;
  }

  get filteredLaunches() {
	const { rocketNameFilter } = this.state;
	const { launches } = this.props;

	if (!rocketNameFilter) return launches;
	
	return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter); 
  }

  handleFilterChange(value) {
	this.setState({ rocketNameFilter: value.target.value, })
  }

  handleLaunchClick(flight_number) {
	  this.props.showDetails(flight_number);
	  window.scrollTo(0,0);
  }

  render() {
	const logo = require("../assets/img/space_x_logo_bw_centered.svg")
	return (
		<div className="launches-wrapper">
            <HeroSection />
            <FilterButtons options={this.availableRocketNames} onChange={this.handleFilterChange} />
            <section className={"list"}>
                {
					this.filteredLaunches.map( flight => {
                    	return (
						<div className="item-wrapper" key={flight.flight_number} >
							<ListItem id={flight.flight_number} onLaunchClick={() => this.handleLaunchClick(flight.flight_number)} flight={flight} />
								<div className={"separator"} />
						</div>);
					})
				}
            </section>
            <Footer /> 
		</div> 
	);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesList)