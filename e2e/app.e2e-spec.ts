import { CreateTicketPage } from './app.po';

describe('create-ticket App', () => {
  let page: CreateTicketPage;

  beforeEach(() => {
    page = new CreateTicketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
