import { test, expect, Locator } from "@playwright/test";

test("Single Select DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/?m=1");

  //1) Select option from the drop down(4 ways)

  // await page.selectOption("#country",'India')// Visible text
  // await page.selectOption("#country", "usa"); // by using value attribute
  // await page.selectOption("#country",{label:"India"}); //label
  // await page.selectOption("#country", { index: 3 });// by using index

  //2) Check number of options in the dropdown (count)

  const dropdownOptions: Locator = page.locator("#country>option");
  await expect(dropdownOptions).toHaveCount(10);

  //3) Check an option present in the dropdown
  const optionText: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log(optionText);
  expect(optionText).toContain("Japan"); //check if the array contains "Japan"

  //4) printing option from the drop down
  for (const option of optionText) {
    console.log(option);
  }



  // await page.waitForTimeout(3000);
});
