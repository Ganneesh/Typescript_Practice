// helpers/commonAssertions.ts
import { Page } from '@playwright/test';

// Function to check if an element is visible
export async function isVisible(page: Page, selector: string): Promise<void> {
  const element = await page.$(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  const isVisible = await element.isVisible();
  if (!isVisible) {
    throw new Error(`Element with selector "${selector}" is not visible.`);
  }
}

// Function to check if an element exists
export async function exists(page: Page, selector: string): Promise<void> {
  const element = await page.$(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" does not exist.`);
  }
}

// Function to check if an element is not visible
export async function isNotVisible(page: Page, selector: string): Promise<void> {
  const element = await page.$(selector);
  if (element) {
    const isVisible = await element.isVisible();
    if (isVisible) {
      throw new Error(`Element with selector "${selector}" is visible, but should not be.`);
    }
  }
}

// Function to check if a button is enabled
export async function isButtonEnabled(page: Page, selector: string): Promise<void> {
  const button = await page.$(selector);
  if (!button) {
    throw new Error(`Button with selector "${selector}" not found.`);
  }
  const isDisabled = await button.isDisabled();
  if (isDisabled) {
    throw new Error(`Button with selector "${selector}" is disabled.`);
  }
}

// Function to check if a button is disabled
export async function isButtonDisabled(page: Page, selector: string): Promise<void> {
  const button = await page.$(selector);
  if (!button) {
    throw new Error(`Button with selector "${selector}" not found.`);
  }
  const isDisable
