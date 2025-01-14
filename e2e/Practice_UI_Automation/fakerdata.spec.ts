import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('fakedemo', () => {
  test('fakerdemo', async ({ page }) => {
    
    // Generate realistic names directly from faker
    const firstName = faker.person.firstName();  // e.g., Robert, Mary
    const lastName = faker.person.lastName();    // e.g., Smith, Johnson
    //const email = faker.internet.email(firstName); // e.g., robert.smith@example.com
    //const phoneNumber = faker.phone.number('###-###-####');  // e.g., 123-456-7890
    //const address = faker.address.streetAddress(); // e.g., 123 Main St
    //const city = faker.address.city();             // e.g., Los Angeles
    //const zipCode = faker.address.zipCode();      // e.g., 90001

    console.log('Generated Realistic Test Data:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    //console.log('Email:', email);
    //console.log('Phone Number:', phoneNumber);
    //console.log('Address:', `${address}, ${city}, ${zipCode}`);

    // Example: Fill this data into a form (replace with your own form selectors)
    await page.goto('https://www.google.com/'); // Adjust URL as necessary
    await page.fill('#APjFqb', firstName);
    //await page.fill('#lastName', lastName);
    //await page.fill('#email', email);
    //await page.fill('#phone', phoneNumber);
    //await page.fill('#address', `${address}, ${city}, ${zipCode}`);
    //await page.click('#submit'); // Adjust selector as necessary
    await page.press('#APjFqb', 'Enter')
    //await page.click('input[name="btnK"]');

    
  });
});
