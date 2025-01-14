// helpers/CommonAssertions.ts
import { Page } from '@playwright/test';

export class CommonAssertions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Function to check if an element is visible
  async isVisible(selector: string): Promise<void> {
    const element = await this.page.$(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" not found.`);
    }
    const isVisible = await element.isVisible();
    if (!isVisible) {
      throw new Error(`Element with selector "${selector}" is not visible.`);
    }
  }

  // Function to check if an element exists
  async exists(selector: string): Promise<void> {
    const element = await this.page.$(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" does not exist.`);
    }
  }

  // Function to check if an element is not visible
  async isNotVisible(selector: string): Promise<void> {
    const element = await this.page.$(selector);
    if (element) {
      const isVisible = await element.isVisible();
      if (isVisible) {
        throw new Error(`Element with selector "${selector}" is visible, but should not be.`);
      }
    }
  }

  // Function to check if a button is enabled
  async isButtonEnabled(selector: string): Promise<void> {
    const button = await this.page.$(selector);
    if (!button) {
      throw new Error(`Button with selector "${selector}" not found.`);
    }
    const isDisabled = await button.isDisabled();
    if (isDisabled) {
      throw new Error(`Button with selector "${selector}" is disabled.`);
    }
  }

  // Function to check if a button is disabled
  async isButtonDisabled(selector: string): Promise<void> {
    const button = await this.page.$(selector);
    if (!button) {
      throw new Error(`Button with selector "${selector}" not found.`);
    }
    const isDisabled = await button.isDisabled();
    if (!isDisabled) {
      throw new Error(`Button with selector "${selector}" is not disabled.`);
    }
  }

  // Function to check if text exists within an element
  async textExists(selector: string, text: string): Promise<void> {
    const element = await this.page.$(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" not found.`);
    }
    const innerText = await element.innerText();
    if (!innerText.includes(text)) {
      throw new Error(`Text "${text}" not found within element with selector "${selector}".`);
    }
  }
}
