export default function ImageGalleryItem({
  image: { id, webformatURL, largeImageURL },
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={this.props.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
