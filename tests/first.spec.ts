import { test, expect } from "@playwright/test";

test("Verify page Title", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  const title: string = await page.title();
  console.log("Title:", title);

  await expect(page).toHaveTitle("Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com");
});

/*
test("Verify Page Title", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  const title: string = await page.title();
  console.log("Title", title);

  await expect(page).toHaveTitle("YouTube");
});
*/
/*test("Verify Page title", async ({ page }) => {
  await page.goto("http://www.automationpractice.pl/index.php");
  const title: string = await page.title();
  console.log("Title", title);
  await expect(page).toHaveTitle("My Shop");
});*/
