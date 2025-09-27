import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly enterKey: Locator;
  readonly itemProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
    this.enterKey = page.getByPlaceholder('Search');
    this.itemProduct = page.getByText('MacBook');
  }

  async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchInput.press('Enter');
  }

  async clickProduct(productName: string) {
    await this.page.getByText(productName).click();
  }
  
  async goto() {
    await this.page.goto('https://opencart.abstracta.us/');
  }

}