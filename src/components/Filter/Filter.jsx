import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Conteiner, Title, Input } from './Filter.styled';

class Filter extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <Conteiner>
        <Title>Find contacts by name</Title>
        <Input onChange={this.setFilterValue}></Input>
      </Conteiner>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
