import { CalcListPage } from './app.po';

describe('calc-list App', () => {
  let page: CalcListPage;

  beforeEach(() => {
    page = new CalcListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
