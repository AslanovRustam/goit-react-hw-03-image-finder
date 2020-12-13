import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    imageName: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log('pre', prevProps.imageName);
      console.log('this', this.props.imageName);
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=19076419-9578a5b9e86945eec97e7243e&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(imageName => this.setState({ imageName }));
    }
  }
  render() {
    return (
      <>
        {this.state.imageName && (
          <li className="ImageGalleryItem">
            <img src="" alt="" className="ImageGalleryItem-image" />
          </li>
        )}
      </>
    );
  }
}
