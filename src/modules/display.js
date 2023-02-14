import events from "./selectors";
import apiHandler from './fetch';
import BASE_URL from './utils';

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    const { image} = movie.show
    const list = document.createElement('li');
    const img = document.createElement('img')
    img.setAttribute('src', image.medium)
    list.setAttribute('class', 'movie-list')
    list.appendChild(img)
    events.appendChild(list);
  });
}

const getAllEvents = async() => {
  const response = await apiHandler('GET', BASE_URL)
  console.log(response)
  displayMovies(response)
}

getAllEvents()