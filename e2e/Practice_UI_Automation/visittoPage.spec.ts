const { test, expect } = require('@playwright/test')

test.describe('visit to page url',()=>{

test('visit to google page',async({page})=>{

await page.goto('https://www.google.com/')





})

})