import * as React from 'react';
import PropTypes from 'prop-types';
import dateF from 'date-fns';
import '../styles/Counter.sass';

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

    componentWillReceiveProps() {
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

    convertSeconds(s) {
        var d, h, m;
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return { d: d, h: h, m: m, s: s };
    };

    tick() {
        if(this.state.from > this.state.to) {
            let time = () => this.convertSeconds(this.state.from-this.state.to);
            this.setState({
                from: this.state.from - 1,
                left: `${time().d} DAYS ${time().h} HRS ${time().m} MINS`
            });

        } else if (this.state.from === this.state.to) {
            this.onSuccess();
        }
    }

    
    render() {
        return (
            <div>
                <p className = "timer" > 
                    {this.state.left} TO START</p>
            </div>
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