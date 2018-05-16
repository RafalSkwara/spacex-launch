import React from "react"
import HeroSection from "../components/list/HeroSection"
import ListSection from "../components/list/ListSection"
import FilterButtons from "../components/list/FilterButtons"
import Footer from "../components/Footer"
import "../styles/LaunchesList.sass"

export default class LaunchesList extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
	super(props)
	this.state = {
	  launches: this.props.launches,
	  rocketNameFilter: null,
	}
	this.handleFilterChange = this.handleFilterChange.bind(this)
  }

//   componentWillMount() {
// 	this.filteredLaunches
//   }

  componentDidUpdate() {
	  console.log(this.state.rocketNameFilter)
  }

  get availableRocketNames() {
	const {
	  launches
	} = this.props

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
	this.setState({ rocketNameFilter: value.target.value, launches: filtered, })
	const filtered = this.filteredLaunches
	this.setState({
        launches: filtered,
    })

  }
  render() {
	return ( <div className = "launches-wrapper" >
		<HeroSection />
		<FilterButtons 
			options = { this.availableRocketNames }
			onChange = {this.handleFilterChange}
		/> 
		<ListSection launches = 
			{this.state.launches}
			onLaunchClick = {this.props.onLaunchClick}
		/> 
		<Footer />
	  </div>
	)
  }
}
