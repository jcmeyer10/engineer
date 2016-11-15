import { EngineerPage } from './app.po';

describe('engineer App', function() {
  let page: EngineerPage;

  beforeEach(() => {
    page = new EngineerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
