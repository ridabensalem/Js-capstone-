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

export const displayLikes = (array) => {
  const movieElements = document.querySelectorAll('.span-likes')
  movieElements.forEach(element => {
    const index = element.getAttribute('data-index')
    const ind = array.find(arr => arr.item_id === index)
    const par = document.createElement('p')
    par.textContent = `${ind ? ind.likes : '0'} likes`
    element.appendChild(par)
  })
  console.log(array)
}

export default displayMovies;
