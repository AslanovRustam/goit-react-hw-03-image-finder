import { Component } from 'react';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { src, alt, largeImageUrl } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          src={src}
          alt={alt}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}
// export default function ImageGalleryItem({
//   image: { id, webformatURL, largeImageURL },
// }) {
//   return (
//     <li className="ImageGalleryItem">
//       <img
//         src={this.props.webformatURL}
//         alt=""
//         className="ImageGalleryItem-image"
//       />
//     </li>
//   );
// }
