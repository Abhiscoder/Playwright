import { test, expect, Locator } from "@playwright/test";
import { text } from "stream/consumers";

//Text input and textbox
test("Text Input Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  const textBox: Locator = page.locator("#name");

  await expect(textBox).toBeVisible();
  await expect(textBox).toBeEnabled();
  const maxLenght: string | null = await textBox.getAttribute("maxlength"); //Returns value of maxlength attribute of the element
  expect(maxLenght).toBe("15");

  await textBox.fill("Abhishek Kumar");
  // console.log("Text Content of FirstName:", await textBox.textContent()); //return empty
  const enteredvalue: string = await textBox.inputValue(); //return input value of text box
  console.log("Text value of the FirstName:", enteredvalue);
  expect(enteredvalue).toBe("Abhishek Kumar");

  await page.waitForTimeout(5000);
});

//Radio Button

test("Radio Button Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  const maleRadio: Locator = page.locator("#male"); //maleRadio is a locator
  await expect(maleRadio).toBeVisible();
  await expect(maleRadio).toBeEnabled();
  expect(await maleRadio.isChecked()).toBe(false);

  await maleRadio.check(); //select radio button
  expect(await maleRadio.isChecked()).toBe(true);  //first method
  await expect(maleRadio).toBeChecked(); //second method and is preferable

  await page.waitForTimeout(5000);
});

//Checkbox 
test.only("Checkbox Button Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  const maleRadio: Locator = page.locator("#male"); //maleRadio is a locator
  await expect(maleRadio).toBeVisible();
  await expect(maleRadio).toBeEnabled();
  expect(await maleRadio.isChecked()).toBe(false);

  await maleRadio.check(); //select radio button
  expect(await maleRadio.isChecked()).toBe(true);  //first method
  await expect(maleRadio).toBeChecked(); //second method and is preferable

  await page.waitForTimeout(5000);
});
