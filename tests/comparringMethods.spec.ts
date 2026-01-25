import { test, expect, Locator } from "@playwright/test";

test("Comparing Methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const products: Locator = page.locator(".product-title"); //Locator is interface

  // 1)innerText() v/s textContent()
  console.log("first innerText:-", await products.nth(1).innerText()); // o/p:- 14.1-inch Laptop
  console.log("first textContent:-", await products.nth(1).textContent()); // o/p:-             14.1-inch Laptop

  //2) Using Looping count all the products
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    //using innerText()
    const productNames: string = await products.nth(i).innerText();
    console.log("innerText:-", productNames);

    //using textContent()
    const productName: string | null = await products.nth(i).textContent();
    console.log("textContent:-", productName);

    //using textContent() with trim()
    const productNamess: string | null = await products.nth(i).textContent();
    console.log("textContent with trim:-", productNamess?.trim());
  }

  //3) allInnerText() v/s allTextContent()
  console.log("**** comparing allInnerText() v/s allTextContent() *****");

  const productNames: string[] = await products.allInnerTexts();
  console.log("Product Names Captured by allInnerText():-", productNames);

  const productNamess: string[] = await products.allTextContents();
  console.log("Product Names Captured by allTextContent():-", productNamess);

  const productNametrimes: string[] = productNamess.map((text) => text.trim());
  console.log(
    "Product Names Captured by allTextContent() with trim:-",
    productNametrimes,
  );

  //4) all() -- Convert Locator to Locator type of array[]

  const productsLocators: Locator[] = await products.all();
  console.log(productsLocators); //6 prodcuts

  console.log(await productsLocators[1].innerText());

  //for of loop
  for (let productloc of productsLocators) {
    console.log(await productloc.innerText());
  }

  // for in loop
  for (let i in productsLocators) {
    console.log(await productsLocators[i].innerText());
  }
});
