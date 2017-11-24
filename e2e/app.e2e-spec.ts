import { MyFirstNgAppPage } from './app.po';

describe('my-first-ng-app App', function() {
  let page: MyFirstNgAppPage;

  beforeEach(() => {
    page = new MyFirstNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
