import { HexMePage } from './app.po';

describe('hex-me App', () => {
  let page: HexMePage;

  beforeEach(() => {
    page = new HexMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hm works!');
  });
});
