import { LazyLoadingExamplePage } from './app.po';

describe('lazy-loading-example App', () => {
  let page: LazyLoadingExamplePage;

  beforeEach(() => {
    page = new LazyLoadingExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
