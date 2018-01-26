import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CarrierLogo.css';

// import carriers logo
import BA from '../Logo/carrier_ba.svg';
import TK from '../Logo/carrier_tk.png';
import S7 from '../Logo/carrier_s7.svg';
import SU from '../Logo/carrier_su.svg';

class CarrierLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carriers: {
        logo: {
          BA, TK, S7, SU,
        },
      },
    };
  }

  render() {
    return (
      <img
        className="Ticket__carrier"
        src={this.state.carriers.logo[this.props.carrier]}
        alt="logo"
      />
    );
  }
}

CarrierLogo.propTypes = {
  carrier: PropTypes.string.isRequired,
};

export default CarrierLogo;
