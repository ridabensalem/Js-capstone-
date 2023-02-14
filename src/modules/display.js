import events from './selectors.js';
import apiHandler from './fetch.js';
import BASE_URL from './utils.js';

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    const { image } = movie.show;
    const list = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', image.medium);
    list.setAttribute('class', 'movie-list');
    list.appendChild(img);
    events.appendChild(list);
  });
};

const getAllEvents = async () => {
  const response = await apiHandler('GET', BASE_URL);
  displayMovies(response);
};

getAllEvents();