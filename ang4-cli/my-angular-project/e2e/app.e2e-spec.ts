import { MyAngularProjectPage } from './app.po';

describe('my-angular-project App', () => {
  let page: MyAngularProjectPage;

  beforeEach(() => {
    page = new MyAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
