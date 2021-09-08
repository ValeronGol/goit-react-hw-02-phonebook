import PropTypes from 'prop-types';
import { Conteiner, Info } from './Contact.styled';

const Contact = ({ name, number, id, onDelete }) => (
  <Conteiner>
    <Info>{`${name}: ${number}`}</Info>
    <button data-id={id} onClick={onDelete}>
      Delete
    </button>
  </Conteiner>
);
Contact.propTypes = {
  name: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contact;
