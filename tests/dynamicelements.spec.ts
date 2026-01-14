import { test, expect, Locator } from "@playwright/test";
//Xpath
test("Handle Dynamic Element using Xpath", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  for (let i = 1; i <= 5; i++) {
    let button: Locator = page.locator(
      '//button[text()="STOP" or text()="START"]'
    );

    //Click the button
    await button.click();

    //Wait for 2 seconds
    await page.waitForTimeout(2000);
  }
});
