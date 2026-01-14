import { test, expect, Locator } from "@playwright/test";

test("XPath demo in Plawright", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // 1. Absolute Xpath

  // const logo: Locator = page.locator(
  //   "//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]"
  // );
  const logo: Locator = page.locator(
    "xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]"
  );

  await expect(logo).toBeVisible();

  //2. Relative xPath - logo
  const relativelogo: Locator = page.locator(
    "//img[@alt='Tricentis Demo Web Shop']"
  );
  await expect(relativelogo).toBeVisible();

  //3. contains()
  const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
  const productsCount: number = await products.count(); // count number of products
  console.log("No. of Computer Related Products:", productsCount); //o/p:- No. of Computer Related Products: 4
  expect(productsCount).toBeGreaterThan(0); // check number of products are greater than 0

  // Show specific number of products Like(first, last, nth)
  // console.log(await products.textContent()); // Error: Strict mode violation

  /*console.log(
    "First computer related product:",
    await products.first().textContent()
  ); // o/p:- First computer related product: Build your own cheap computer
  console.log(
    "Last computer related product:",
    await products.last().textContent()
  ); // o/p:-Last computer related product: Simple Computer
  console.log(
    "Nth computer related product:",
    await products.nth(1).textContent()
  ); // o/p:-Nth computer related product: Build your own computer
  */

  let productTitle: string[] = await products.allTextContents(); //getting all the matched products in to an array
  console.log("All computer related product titles:", productTitle);
  for (let pt of productTitle) {
    console.log(pt);
  }

  //4. start-with()

  const buildingProducts: Locator = page.locator(
    "//h2/a[starts-with(@href,'/build')]"
  ); // returns multiple elements

  const count: number = await buildingProducts.count();
  console.log("count", count);
  expect(count).toBeGreaterThan(0);

  //5. text() method

  const reglink: Locator = page.locator("//a[text()='Register']");
  await expect(reglink).toBeVisible();

  //6. last()

  const lastItem: Locator = page.locator(
    "//div[@class='column follow-us']//li[last()]"
  );
  console.log("LastItem:", await lastItem.textContent());
  await expect(lastItem).toBeVisible();
  
  //7. position()
  const positionitem: Locator = page.locator(
    "//div[@class='column follow-us']//li[position()=3]"
  );
  console.log("positionitem:", await positionitem.textContent());
  await expect(lastItem).toBeVisible();
  
});
