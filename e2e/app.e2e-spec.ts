import { SimpleCRMPage } from './app.po';

describe('simple-crm App', () => {
  let page: SimpleCRMPage;

  beforeEach(() => {
    page = new SimpleCRMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
