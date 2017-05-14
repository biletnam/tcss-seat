import { BookMySeatPage } from './app.po';

describe('book-my-seat App', () => {
  let page: BookMySeatPage;

  beforeEach(() => {
    page = new BookMySeatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
