import{ test, expect } from ('@playwright/test');

test('API Automation Example', async ({ request }) => {
  // Perform a GET request
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  // Check the status code
  expect(response.status()).toBe(200);
  
  // Validate response body
  const responseBody = await response.json();
  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBeDefined();
  console.log('Response Body:', responseBody);
  
  // Perform a POST request
  const postResponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });

  expect(postResponse.status()).toBe(201);
  const postResponseBody = await postResponse.json();
  expect(postResponseBody.id).toBeDefined();
  console.log('Post Response:', postResponseBody);
});
