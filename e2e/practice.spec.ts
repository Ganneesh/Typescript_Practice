import { test, expect } from '@playwright/test';

test.describe('This is my sample test cases',()=>{

test('first test',async({page})=>{

    // Navigate to the desired URL

    await page.goto('https://www.google.com/')

    await page.reload()
    

    await expect(page).toHaveURL('https://www.google.com/')

    // Assert that the page has loaded by checking the URL
  await expect(page).toHaveURL('https://www.google.com/')

  //verify the title of page 

  await expect(page).toHaveTitle('Google')

})


})