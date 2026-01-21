import { test, expect, Locator } from "@playwright/test";

test("Verify dropdown is sorted", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/?m=1");

  const dropdownOptions: Locator = page.locator("#animals>option");
  // const dropdownOptions: Locator = page.locator("#colors>option");
  // console.log(await dropdownOptions.allTextContents());
  const optionsText: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim(),
  );
  // originalList and sortedList both are return same result because .sort() are mutable. It change the original array.
  // const originalList: string[] = optionsText;
  // const sortedList: string[] = optionsText.sort();

  // originalList and sortedList both are return same result because .sort() are mutable. It change the original array. so we use fix the problem use spread operator {...}
  const originalList: string[] = [...optionsText];
  const sortedList: string[] = [...optionsText].sort();

  console.log("Original List:", originalList);
  console.log("Sorted List:", sortedList);

  expect(originalList).toEqual(sortedList);

  await page.waitForTimeout(5000);
});
