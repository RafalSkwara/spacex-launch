import React from 'react';
import '../../styles/DetailsHeader.sass';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {showList} from '../../actions/actions';


class DetailsHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

    clickHandler() {
		this.props.showList();
	}

    render() {
        const logo = require('../../assets/img/space_x_logo_bw_centered.png');
        const arrow = require("../../assets/img/arrow_pointer.svg")
        return (
			<div className="details-header">
				<div className="details-header__column details-header__column--25">
					<button className="go-back-btn" onClick={this.clickHandler}>
						<div className="go-back-btn__arrow">
							<img src={arrow} />
							<div></div>
						</div> 
						Go back
					</button>
				</div>
				<div className="details-header__column details-header__column--50">
					<img src={logo} />
				</div>
				<div className="details-header__column details-header__column--25" />
			</div> 
		);
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		showList: showList
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(DetailsHeader)