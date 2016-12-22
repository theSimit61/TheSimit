import { ProjektCheckPage } from './app.po';

describe('projekt-check App', function() {
  let page: ProjektCheckPage;

  beforeEach(() => {
    page = new ProjektCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
