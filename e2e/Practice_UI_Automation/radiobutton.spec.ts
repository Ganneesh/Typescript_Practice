import {test,expect} from '@playwright/test'

test.describe('Radiobutton Practice',()=>{

    test.beforeEach(async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    })

test('Test Case 1-Verify the Radio Button Example should be visible ',async({page})=>{

    const label=await page.locator('legend').nth(0).innerText()
    expect(label).toBe('Radio Button Example')

})

test('Test Case 2',async({page})=>{

expect(await page.locator('input[value="radio1"]').getAttribute('value')).toBe('radio1')
expect(await page.locator('input[value="radio2"]').getAttribute('value')).toBe('radio2')
expect(await page.locator('input[value="radio3"]').getAttribute('value')).toBe('radio3')
})

test('Test Case 3',async({page})=>{

    page.locator('input[value="radio1"]').click()
    expect(await page.locator('input[value="radio2"]').isChecked()).toBe(false)
    expect(await page.locator('input[value="radio3"]').isChecked()).toBe(false)
})

    

})