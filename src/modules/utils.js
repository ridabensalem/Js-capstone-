export const BASE_URL = 'https://api.tvmaze.com/search/shows?q=girls';

const closeModal = () => {
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  body.removeChild(overlay);
};

export const displayReserve = (data) => {
  const overlay = document.createElement('div');
  const body = document.querySelector('body');
  overlay.classList.add('overlay');
  overlay.innerHTML = ` <div class="overlay-content">
                          <div class="close-container"><span class="close-modal"><i class="fa-sharp fa-solid fa-xmark"></i><span></div>
                          <div class="flex">
                            <div class="overlay-image">
                              <img src=${data.image.medium} alt="">
                            </div>
                            <div>
                              <h2>${data.name}</h2>
                              <p></p>
                              <h5>Reservations</h5>
                              <ul>
                                <li>2023-02-09 --2023-02-14 by daniel</li>
                                <li>2023-02-10 --2023-02-25 by david</li>
                              </ul>
                            </div>
                          </div>
                          <form action="#">
                            <h3>Add a reservation</h3>
                            <input class="form_item" id="name" type="text" name="name" placeholder="Yeremias" maxlength="30" required>
                            <input class="form_item" id="start-date" type="email" name="start-date" placeholder="natajayanj14@gmail.com" required>
                            <input class="form_item" id="end-date" type="email" name="end-date" placeholder="natajayanj14@gmail.com" required>
                            <div id="error-message"></div>
                            <button type="submit" class="form_button" >Reserve</button>
                          </form>
                        </div>`;
  body.appendChild(overlay);
  const closeBtn = document.querySelector('.close-modal');
  closeBtn.addEventListener('click', closeModal);
};
// comment pop up
export const commentPopUp = (data) => {
  const overlay = document.createElement('div');
  const body = document.querySelector('body');
  overlay.classList.add('overlay');
  overlay.innerHTML = ` <div class="overlay-content">
                          <div class="close-container"><span class="close-modal"><i class="fa-sharp fa-solid fa-xmark"></i><span></div>
                          <div class="flex">
                            <div class="overlay-image">
                              <img src=${data.image.medium} alt="">
                            </div>
                            <div>
                              <h2>${data.name}</h2>
                              <p></p>
                              <h5>Comments </h5>
                              <ul>
                                <li>2023/02/14 I would love to watch it by Rida </li>
                                <li>2023/02/10 It is an amazing movie  By Badr</li>
                              </ul>
                            </div>
                          </div>
                          <form action="#">
                            <h3>Write your comment here </h3>
                            <input class="form_item" id="name" type="text" name="name" placeholder="your name" maxlength="30" required>
                            <input class="form_item" id="start-date" type="email" name="start-date" placeholder="your insights" required>
                            <div id="error-message"></div>
                            <button type="submit" class="form_button" >Comment</button>
                          </form>
                        </div>`;
  body.appendChild(overlay);
  const closeBtn = document.querySelector('.close-modal');
  closeBtn.addEventListener('click', closeModal);
};

export const createMovieElements = (image, name, movie) => {
  const btnContainer = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const movieName = document.createElement('h3');
  movieName.textContent = name;
  const img = document.createElement('img');
  commentBtn.setAttribute('class', 'comment-btn');
  reserveBtn.setAttribute('class', 'reserve-btn');
  reserveBtn.addEventListener('click', () => displayReserve(movie));
  commentBtn.addEventListener('click', () => commentPopUp(movie));
  commentBtn.textContent = 'Comments';
  reserveBtn.textContent = 'Reservations';
  btnContainer.setAttribute('class', 'movie-actions');
  img.setAttribute('src', image.medium);
  btnContainer.appendChild(reserveBtn);
  btnContainer.appendChild(commentBtn);
  return [img, movieName, btnContainer];
};

// export default BASE_URL;