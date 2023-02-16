import { BASE_URL, getAllComments, getAllLikes, INV_URL } from './API.js';
import { apiHandlerInv, apiHandlerMovie } from './fetch.js';
import { commentPopUp, displayReserve } from './popup.js';
import { displayLikes, displayMovies } from './display';
import events from './selectors';

const closeModal = () => {
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  body.removeChild(overlay);
};

const getArrayComments = async (id) => {
  const commentsArray = [];
  const comments = await getAllComments(id);
  if (comments) {
    comments.forEach((com) => {
      const { comment, username } = com;
      const createdDate = com.creation_date;
      const li = document.createElement('li');
      li.innerHTML = `${createdDate} ${comment} by ${username}`;
      commentsArray.push(li.innerHTML);
    });
  }
  return commentsArray;
};

export const createMovieElements = (image, name, movie) => {
  const btnContainer = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const header = document.createElement('div');
  const span = document.createElement('span');
  span.setAttribute('class', 'span-likes');
  span.setAttribute('data-index', movie.id);
  header.classList.add('movie-header');
  const movieName = document.createElement('h3');
  const likeIcon = document.createElement('i');
  likeIcon.classList.add('fa-solid');
  likeIcon.classList.add('like-icon');
  likeIcon.setAttribute('id', movie.id);
  likeIcon.classList.add('fa-heart');
  span.appendChild(likeIcon);
  header.appendChild(movieName);
  header.appendChild(span);
  movieName.textContent = name;
  const img = document.createElement('img');
  commentBtn.setAttribute('class', 'comment-btn');
  reserveBtn.setAttribute('class', 'reserve-btn');
  reserveBtn.addEventListener('click', () => displayReserve(movie, closeModal));
  commentBtn.addEventListener('click', () => commentPopUp(movie, closeModal, getArrayComments));
  commentBtn.textContent = 'Comments';
  reserveBtn.textContent = 'Reservations';
  btnContainer.setAttribute('class', 'movie-actions');
  img.setAttribute('src', image.medium);
  btnContainer.appendChild(reserveBtn);
  btnContainer.appendChild(commentBtn);
  return [img, header, btnContainer];
};

export const getAllMovies = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  const data = await response.json()
  return data
};

export const likeMovie = async (id) => {
  const payload = { item_id: id };
  const response = await apiHandlerInv('POST', INV_URL, payload);
  displayAllMoviesAndLikes()
  return response
};

export const clearPreviousDOM = () => {
  const list = document.querySelectorAll('.movie-list')
  list.forEach(ls => {
    events.removeChild(ls)
  })
}

export const displayAllMoviesAndLikes = async () => {
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

  
