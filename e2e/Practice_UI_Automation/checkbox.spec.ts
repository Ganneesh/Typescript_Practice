import {test,expect} from '@playwright/test'


test.describe('checkbox test cases',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })

test('checkbox test case 1',async({page})=>{

    let elementname:string|null =await page.locator('#checkBoxOption1').getAttribute('value')
    
    expect(elementname).toBe('option1')
    
    console.log("attribute value is :- "+elementname)
    expect(page.locator('#checkBoxOption1')).toBeEnabled()
    await page.locator('#checkBoxOption1').click()
    expect(page.locator('#checkBoxOption2')).toBeVisible()
    expect(page.locator('#checkBoxOption2')).toBeVisible()
    expect(page.locator('#checkBoxOption3')).toBeEnabled()
    expect(page.locator('#checkBoxOption1')).toBeEnabled()

})

})