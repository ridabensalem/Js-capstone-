import events from './selectors.js';
import apiHandler from './fetch.js';
import { BASE_URL, createMovieElements, displayReserve } from './utils.js';

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    const { image, name } = movie.show;
    const list = document.createElement('li');
    list.setAttribute('class', 'movie-list');
    const arrayElements = createMovieElements(image, name, movie.show);
    arrayElements.forEach((elem) => {
      list.appendChild(elem);
    });
    events.appendChild(list);
  });
};

const getAllEvents = async () => {
  const response = await apiHandler('GET', BASE_URL);
  displayMovies(response);
};

getAllEvents();