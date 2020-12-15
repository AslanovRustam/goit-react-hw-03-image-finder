import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function ImagePendingView() {
  return <Loader type="Grid" color="#00BFFF" height={80} width={80} />;
}
