import { browser, element, by } from 'protractor';

export class HexMePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hm-root h1')).getText();
  }
}
