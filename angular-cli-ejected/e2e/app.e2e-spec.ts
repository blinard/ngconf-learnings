import { AngularCliEjectedPage } from "./app.po";

describe("angular-cli-ejected App", () => {
  let page: AngularCliEjectedPage;

  beforeEach(() => {
    page = new AngularCliEjectedPage();
  });

  it("should display message saying app works", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("app works!");
  });
});
