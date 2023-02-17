/**
 * @jest-environment jsdom
 */
import commentsCounter from '../modules/commentsCounter.js';

describe('commentsCounter', () => {
  test('returns the correct number of comments', () => {
    document.body.innerHTML = `
      <div>
        <div class="comment"></div>
        <div class="comment"></div>
        <div class="comment"></div>
      </div>
    `;
    expect(commentsCounter()).toBe(3);
  });
});
test('returns 0 if no comments are present', () => {
  document.body.innerHTML = ' <div>      </div>';
  expect(commentsCounter()).toBe(0);
});

test('returns 1 if only one comment is present', () => {
  document.body.innerHTML = `
    <div>
      <div class="comment"></div>
    </div>
  `;
  expect(commentsCounter()).toBe(1);
});

test('returns 0 if no comments with the given class name are present', () => {
  document.body.innerHTML = `
    <div>
      <div class="other-class"></div>
    </div>
  `;
  expect(commentsCounter()).toBe(0);
});