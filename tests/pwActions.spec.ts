import { test, expect, Locator } from "@playwright/test";

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
  expect(await maleRadio.isChecked()).toBe(true); //first method
  await expect(maleRadio).toBeChecked(); //second method and is preferable

  await page.waitForTimeout(5000);
});

//Checkbox
test.only("Checkbox  Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //1. Select specific checkbox (sunday) using getByLabel and assert

  const sundayCheckbox: Locator = page.getByLabel("Sunday");
  await sundayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();

  //2. Select all the checkboxs and assert each is checked
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));
  expect(checkboxes.length).toBe(7);

  //3. Select all checkboxes and assrt each is checked

  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  //4. Uncheck last 3 checkboxes and assert

  for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  //5. Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped
  for (const checkbox of checkboxes) {
    if (expect(checkbox.uncheck())) {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    } else {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    }
  }

  //6. How to checked randome checkboxs

  const indexes: number[] = [1, 3, 6];

  for (const i of indexes) {
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
  }

  //Select the check box based on the Label
  const weekname: string = "Friday";
  for (const label of days) {
    if (label.toLowerCase() === weekname) {
      const checkbox = page.getByLabel(label);
      checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  await page.waitForTimeout(5000);
});


