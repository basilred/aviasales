import './TicketStops.css';

interface Props {
  stops: number;
}

const decline = (stops: number): string => {
  if (stops === 0) {
    return '';
  }

  if (stops === 1) {
    return `${stops} пересадка`;
  }

  if (stops < 5) {
    return `${stops} пересадки`;
  }

  return `${stops} пересадок`;
};

const TicketStops = ({ stops }: Props) => (
  <div className="TicketStops">
    <span>{decline(stops)}</span>
    <div className="TicketStops__plane" />
  </div>
);

export default TicketStops;
