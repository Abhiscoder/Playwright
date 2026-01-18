import { test, expect, Locator } from "@playwright/test";
import { text } from "stream/consumers";

test("Text Input Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");


  //Text input and textbox
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
