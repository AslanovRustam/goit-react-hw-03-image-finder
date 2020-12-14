import React, { Component } from 'react';
import ImagesErrorView from '../ImagesErrorView/ImagesErrorView';
import ImageGallery from '../ImageGallery/Imagegallery';

// export default class ImageGalleryItem extends Component {
export default class ImagesInfo extends Component {
  state = {
    images: [],
    imageName: null,
    // loading: false,
    status: 'idle',
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=19076419-9578a5b9e86945eec97e7243e&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(imageName => this.setState({ imageName, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { error, status } = this.state;
    if (status === 'idle') {
      return <div>Please, enter the search query</div>;
    }
    if (status === 'pending') {
      return <div>Loading image...</div>;
    }
    if (status === 'rejected') {
      return <ImagesErrorView />;
    }
    if (status === 'resolved') {
      return <ImageGallery images={this.state.images.hits} />;
    }
    // return (
    //   <>
    //     {this.state.loading && <div>Loading image...</div>}
    //     {!this.props.imageName && <div>Please, enter the search query</div>}
    //     {this.state.imageName && (
    //       <li className="ImageGalleryItem">
    //         <img
    //           src={this.props.largeImageURL}
    //           alt=""
    //           className="ImageGalleryItem-image"
    //         />
    //       </li>
    //     )}
    //   </>
    // );
  }
}
