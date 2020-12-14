import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImagesInfo from './ImagesInfo/ImagesInfo';
// import ImageGallery from './ImageGallery/Imagegallery';

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
        {/* <ImageGalleryItem imageName={this.state.imageName} /> */}
        {/* <ImageGallery /> */}
        <ImagesInfo />
        <ToastContainer />
      </>
    );
  }
}

// export default App;
