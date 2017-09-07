import { UIComponentsPage } from './app.po';

describe('uicomponents App', () => {
  let page: UIComponentsPage;

  beforeEach(() => {
    page = new UIComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ui works!');
  });
});
