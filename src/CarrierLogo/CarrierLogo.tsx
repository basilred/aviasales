import './CarrierLogo.css';

// import carriers logo
import BA from '../Logo/carrier_ba.svg';
import TK from '../Logo/carrier_tk.png';
import S7 from '../Logo/carrier_s7.svg';
import SU from '../Logo/carrier_su.svg';

interface Props {
  carrier: string;
}

const carriers: {logo: {[key: string]: string}} = {
  logo: {
    BA, TK, S7, SU,
  },
};

const CarrierLogo = ({ carrier }: Props) => (
  <img
    className="Ticket__carrier"
    src={carriers.logo[carrier]}
    alt="logo"
  />
);

export default CarrierLogo;
