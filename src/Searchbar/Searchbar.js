import React, { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    image: '',
  };
  //получение значения input
  handleNameChange = event => {
    this.setState({ image: event.currentTarget.value.toLowerCase() });
  };
  //отправка значения из формы
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.image.trim() === '') {
      toast('Please enter the query !');
      return;
    }
    // this.props.onSubmit - вызывает props из App под именем onSubmit
    this.props.onSubmitForm(this.state.image);
    this.setState({ image: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="imageName"
            value={this.state.image}
            onChange={this.handleNameChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
