import { RestfulTestPage } from './app.po';

describe('restful-test App', () => {
  let page: RestfulTestPage;

  beforeEach(() => {
    page = new RestfulTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
