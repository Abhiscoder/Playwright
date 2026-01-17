import { test, expect, Locator } from "@playwright/test";

test("CSS Locator", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  //tag#id
  const searchlocator: Locator = page.locator("#small-searchterms");

  await searchlocator.fill("T-shirts");

  //tag.class

  await page.locator("input.search-box-text").fill("T-shirts");

  //tag[attribute='value']

  await page.locator("[name='q']").fill("T-shirts");

  //tag.class[attribute='value']

  await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");
  await page.waitForTimeout(5000);
});
