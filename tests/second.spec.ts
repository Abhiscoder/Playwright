import { test, expect } from "@playwright/test";

// test("Verify page URL", async ({ page }) => {
//   await page.goto("https://www.flipkart.com/");
//   let url: string = await page.url();

//   console.log("URL:", url);

//   await expect(page).toHaveURL(/flipkart/); //Checks wheter the current URL contains the text "/flipkart/"
// });

test("Verify page URL", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  let url: string = await page.url();
  console.log("URL:", url);
  await expect(page).toHaveURL(/youtube/); //Checks wheter the current URL contains the text "/youtube/"
});

/* test("Verify Page Url", async ({ page }) => {
  await page.goto("http://www.automationpractice.pl/index.php");
  let url: string = await page.url();
  console.log("Url:", url);

  await expect(page).toHaveURL(/automationpractice/);  //Checks wheter the current URL contains the text "/automationpractice/"
});*/
