import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagesErrorView from '../ImagesErrorView/ImagesErrorView';
import ImageGallery from '../ImageGallery/Imagegallery';
import Api from '../ImagesApi';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

// export default class ImageGalleryItem extends Component {
export default class ImagesInfo extends Component {
  state = {
    images: [],
    // imageName: null,
    // loading: false,
    status: 'idle',
    error: null,
    page: 1,
  };

  static propTypes = {
    imageName: PropTypes.string,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.imgItem;
    const nextImg = this.props.imgItem;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    console.log(nextPage);

    if (prevImg !== nextImg) {
      this.setState({ page: 1 });
    }

    if (prevImg !== nextImg || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      Api.fetchImages(nextImg, nextPage)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onClickLoadMoreBtn = () => {
    // console.log('больше');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  // fetch(
  //   `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=19076419-9578a5b9e86945eec97e7243e&image_type=photo&orientation=horizontal&per_page=12`,
  // )
  //   .then(res => res.json())
  //   .then(imageName => this.setState({ imageName, status: 'resolved' }))
  //   .catch(error => this.setState({ error, status: 'rejected' }));

  render() {
    const { error, status, images } = this.state;
    if (status === 'idle') {
      return <div>Please, enter the search query</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ImagesErrorView />;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images.hits} />
          <Button onClick={this.onClickLoadMoreBtn} />
        </>
      );
    }
  }
}
