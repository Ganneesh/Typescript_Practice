import {test, expect} from '@playwright/test'

test.describe('verify page url',()=>{

test('verify the page url',async({page})=>{

    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('https://www.google.com/')

})

})