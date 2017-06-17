import { Demo0618Page } from './app.po';

describe('demo0618 App', () => {
  let page: Demo0618Page;

  beforeEach(() => {
    page = new Demo0618Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
