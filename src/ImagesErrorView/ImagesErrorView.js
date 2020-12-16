import error from '../error.jpg';

export default function ImagesErrorView() {
  return (
    <div>
      <img src={error} alt="error">
        No such image finded...
      </img>
    </div>
  );
}
