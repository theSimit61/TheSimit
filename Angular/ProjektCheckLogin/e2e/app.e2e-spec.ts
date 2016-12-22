import { ProjektCheckLoginPage } from './app.po';

describe('projekt-check-login App', function() {
  let page: ProjektCheckLoginPage;

  beforeEach(() => {
    page = new ProjektCheckLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
