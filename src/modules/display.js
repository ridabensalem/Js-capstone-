/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import {
  clearPreviousDOM, createMovieElements, getAllMovies, likeMovie,
} from './utils.js';
import movieCounter from './movieCounter.js';
import { getAllLikes } from './API.js';

export const displayMovies = (movies, events) => {
  clearPreviousDOM();
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
  const numberOfMovies = movieCounter();
  const movieHolderCount = document.querySelector('#movie_count');
  movieHolderCount.innerHTML = `Number of movies  (${numberOfMovies})`;
};

export const displayLikes = (array) => {
  const movieElements = document.querySelectorAll('.span-likes');
  movieElements.forEach((element) => {
    const index = element.getAttribute('data-index');
    const ind = array.find((arr) => arr.item_id === index);
    const par = document.createElement('p');
    par.textContent = `${ind ? ind.likes : '0'} likes`;
    element.appendChild(par);
  });
};

export const displayAllMoviesAndLikes = async () => {
  const events = document.querySelector('#events');
  const movies = await getAllMovies();
  const likesArray = await getAllLikes();
  displayMovies(movies, events);
  displayLikes(likesArray);
  const icons = document.querySelectorAll('.like-icon');
  icons.forEach((icon) => {
    const itemId = icon.getAttribute('id');
    icon.addEventListener('click', () => likeMovie(itemId));
  });
};

export default displayMovies;
