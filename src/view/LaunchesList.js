import React from "react";
import HeroSection from "../components/list/HeroSection";
import FilterButtons from "../components/list/FilterButtons";
import ListItem from "../components/list/ListItem";
import Footer from "../components/Footer";
import "../styles/LaunchesList.sass";

export default class LaunchesList extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
	super(props)
	this.state = {
	  launches: this.props.launches,
	  rocketNameFilter: null,
	}
	this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  get availableRocketNames() {
	const { launches } = this.props;

	const rocketNames = []
	// get all names from launches
	launches.map((launch) => {
	  if (!rocketNames.includes(launch.rocket.rocket_name)) {
		rocketNames.push(launch.rocket.rocket_name)
	  }
	})
	return rocketNames;
  }

  get filteredLaunches() {
	const { rocketNameFilter } = this.state;
	const { launches } = this.props;

	if (!rocketNameFilter) return launches;
	
	return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter)
    
  }

  handleFilterChange(value) {
	console.log(value.target.value)
	this.setState({ rocketNameFilter: value.target.value, })

  }
  render() {
	const logo = require("../assets/img/space_x_logo_bw_centered.svg")
	return (<div className="launches-wrapper">
            <HeroSection />
            <FilterButtons options={this.availableRocketNames} onChange={this.handleFilterChange} />
            <section className={"list"}>
                {
					this.filteredLaunches.map( flight => {
                    	return (<div className="item-wrapper" id={flight.flight_number}>
								<ListItem flight={flight} onLaunchClick={this.props.onLaunchClick} />
								<div className={"separator"} />
							</div>);
					})
				}
            </section>
            <Footer /> 
			</div> )
  }
}
