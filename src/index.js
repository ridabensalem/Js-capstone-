import './style.css';
import { getAllMovies } from './modules/utils';
import { displayMovies } from './modules/display';

const displayAllMovies = async() => {
  const movies = await getAllMovies()
  displayMovies(movies)
}

displayAllMovies()


