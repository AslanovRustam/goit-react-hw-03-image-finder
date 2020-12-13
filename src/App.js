import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class App extends Component {
  state = {
    imageName: '',
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGalleryItem imageName={this.state.imageName} />
        <ToastContainer />
      </>
    );
  }
}

// export default App;
