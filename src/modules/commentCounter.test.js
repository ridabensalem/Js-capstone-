/**
 * @jest-environment jsdom
 */
import commentsCounter from './counter.js';

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
