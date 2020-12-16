import React, { Component } from 'react';
import './App.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImagesInfo from './ImagesInfo/ImagesInfo';
// import ImageGallery from './ImageGallery/Imagegallery';

export default class App extends Component {
  state = {
    image: '',
  };
  handleFormSubmit = image => {
    this.setState({ image });
  };
  render() {
    return (
      <>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImagesInfo imgItem={this.state.image} />
        <ToastContainer />
      </>
    );
  }
}

// export default App;
