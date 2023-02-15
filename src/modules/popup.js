import commentsCounter from './counter.js';

export const displayReserve = (data, closeModal) => {
  const overlay = document.createElement('div');
  const body = document.querySelector('body');
  overlay.classList.add('overlay');
  overlay.innerHTML = ` <div class="overlay-content">
                          <div class="close-container"><span class="close-modal"><i class="fa-sharp fa-solid fa-xmark"></i><span></div>
                          <div class="flex">
                            <div class="overlay-image">
                              <img src=${data.image.original} alt="">
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

export const commentPopUp = async (data, closeModal, getArrayComments) => {
  const comments = await getArrayComments(data.id);
  const commentsList = [];
  comments.forEach((com) => {
    commentsList.push(`<li class="comment">${com}</li>`);
  });
  const overlay = document.createElement('div');
  const body = document.querySelector('body');
  overlay.classList.add('overlay');
  overlay.innerHTML = ` <div class="overlay-content">
                          <div class="close-container"><span class="close-modal"><i class="fa-sharp fa-solid fa-xmark"></i><span></div>
                          <div class="flex">
                            <div class="overlay-image">
                              <img src=${data.image.original} alt="">
                            </div>
                            <div>
                              <h2>${data.name}</h2>
                              <p></p>
                              <h3></h3>
                              <ul class="comments-list">
                                ${commentsList.join('')}
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
  const numberOfComments = commentsCounter();
  const commentHeader = overlay.querySelector('h3');
  commentHeader.innerHTML = `Comments (${numberOfComments})`;
  const closeBtn = document.querySelector('.close-modal');
  closeBtn.addEventListener('click', closeModal);
};