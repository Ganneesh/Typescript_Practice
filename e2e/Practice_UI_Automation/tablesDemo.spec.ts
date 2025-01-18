
import { test, expect } from '@playwright/test'

test.describe(() => {

    test.beforeEach(async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        
    })

    test('table details ', async ({ page }) => {

        let attname: string | null = await page.locator('table#product.table-display').getAttribute('name')
        console.log(attname)
        expect(attname).toBe('courses')

    })

    test('Get the row count', async ({ page }) => {
        await page.waitForSelector('table#product.table-display')

        const tabledetails = await page.locator('table#product.table-display')
        console.log(tabledetails)

        //let trcount:number|null =async tabledetails.locator('tr').count()
        const trcount: number | null = await tabledetails.locator('tr').count()

        console.log(trcount)
    })


})