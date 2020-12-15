function fetchImages(name, page) {
  const KEY = '19076419-9578a5b9e86945eec97e7243e';

  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

const api = { fetchImages };

export default api;
