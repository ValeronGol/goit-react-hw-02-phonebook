import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Conteiner } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.repeatControl(data);
  };

  repeatControl = data => {
    let nameArray = [];
    nameArray = this.state.contacts.map(con => con.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: uuidv4(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(`${data.name} вже є у телефонній книзі!!!`);
    }
  };

  elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContactList = idContact => {
    let newArrAfterDel = this.elementDelete(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  setFilterToState = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  filterArr = fArr => {
    let newArr = fArr.filter(cont =>
      cont.name.toUpperCase().includes(this.state.filter),
    );
    return newArr;
  };

  render() {
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={this.setFilterToState} />
        <ContactList
          contacts={this.filterArr(this.state.contacts)}
          del={this.deleteContactFromContactList}
        />
      </Conteiner>
    );
  }
}
export default App;
