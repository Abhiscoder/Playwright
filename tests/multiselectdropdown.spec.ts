import { test, expect, Locator } from "@playwright/test";

test("Multi Select Drop Down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/?m=1");

  //1) Select option from the drop down(4 ways)
  await page.locator("#colors").selectOption(["Red", "Blue", "Green"]); //using visible text
  await page.locator("#colors").selectOption(["red", "green", "white"]); //using value attribute
  // OR
  await page.selectOption("#colors",["red", "green", "white"]); //using value attribute
  await page.selectOption("#colors", [{ label: "Red" }, { label: "Green" }]); //using label
  // OR
  await page.locator("#colors").selectOption([{ label: "Red" }, { label: "Green" }]); //using label
  await page.selectOption("#colors", [{ index:0 }, { index:2 }, {index:5}]); //using index

  //2) Check number of options in the dropdown (count)
  const dropdownOptions: Locator = page.locator("#colors>option");
  await expect(dropdownOptions).toHaveCount(7);

  //3) Check an option present in the dropdown
  const optionText: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log(optionText);
  expect(optionText).toContain("Green"); //check if the array contains "Green"

  //4) printing option from the drop down
  for (const option of optionText) {
    console.log(option);
  }

  
  await page.waitForTimeout(3000);
});
