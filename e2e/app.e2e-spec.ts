import { Ngcruise2017Page } from './app.po';

describe('ngcruise2017 App', () => {
  let page: Ngcruise2017Page;

  beforeEach(() => {
    page = new Ngcruise2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
