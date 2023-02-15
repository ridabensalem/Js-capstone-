import events from './selectors.js';
import { createMovieElements } from './utils.js';

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

export default displayMovies;
