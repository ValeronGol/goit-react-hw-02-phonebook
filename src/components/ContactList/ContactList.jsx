import PropTypes, { number } from 'prop-types';
import { List } from './ContactList.styled';
import Contact from 'components/Contact/Contact';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <li key={uuidv4()} id={id}>
        <Contact name={name} number={number} onDelete={() => onDelete(id)} />
      </li>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};
export default ContactList;
