import { LrvisualizePage } from './app.po';

describe('lrvisualize App', function() {
  let page: LrvisualizePage;

  beforeEach(() => {
    page = new LrvisualizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
