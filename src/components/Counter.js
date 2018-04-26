import * as React from 'react';
import PropTypes from 'prop-types';
import dateF from 'date-fns';
import './Counter.sass';

class Counter extends React.Component {// eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            to: this.props.countTo,
            from: this.props.countFrom,
            isTicking: true,        // flag to see if timer is ticking
        }; // end state
        this.timer = null;
    }

    componentDidMount() {
        if (this.state.isTicking) {
            this.timer = setInterval(() => {
                this.tick();
            }, 1000);
        }
    }

    onSuccess() {
        this.setState({
            isTicking: false,
        });
        clearInterval(this.timer);
    }

    format(number) {
        return number < 10 ? `0${number}` : number;
    }

    tick() {
        this.setState({
            from: this.state.from - 1,
        });
        if (this.state.from === this.state.to) {
            this.onSuccess();
        }
        this.updateSeconds();
        console.log(this.state.to, this.state.from)
    }

    updateSeconds() {
        let time = dateF.format((this.state.to - this.state.from), 'D [days] H [hrs] M [mins]')
        this.setState({
            left: time
        });
    }
    
    render() {
        return (
                <p className = "timer" > 
                    {this.state.left} to start</p>
        );
    }
}

Counter.defaultProps = {
    countFrom: 10,
    countTo: 0,
};

Counter.propTypes = {
    countFrom: PropTypes.number,
    countTo: PropTypes.number,
};
export default Counter;