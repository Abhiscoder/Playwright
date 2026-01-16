import { test, expect, Locator } from "@playwright/test";

test("Xpath Axes demo", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");

  // self
  const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");
  await expect(germanyCell).toHaveText("Germany");

  //parent axes:- Get parent <tr></tr> of the "Germany" cell
  const germanyParent: Locator = page.locator(
    "//td[text()='Germany']/parent::tr"
  );
  await expect(germanyParent).toContainText("Maria Anders");

  //cild axes :- Get all <td></td> children of the second <tr> </tr> in the table
  const secondRowCells: Locator = page.locator(
    "//table[@id='customers']//tr[2]/child::td"
  );
  await expect(secondRowCells).toHaveCount(3);

  // ancestor axes :- Get ancestor <table></table>of the "Austria" cell
  const findancestor: Locator = page.locator(
    "//td[text()='Austria']/ancestor::table"
  ); // * is represent all ancestor and when I target any specific element replace * -> any tag like(table,tr,body,div,...)
  await expect(findancestor).toHaveAttribute("id", "customers");

  //descendant axes :- Get all <td></td> elements under the table
  const allTds: Locator = page.locator(
    "//table[@id='customers']/descendant::td"
  );
  await expect(allTds).toHaveCount(18);

  //following axes:- Get the <td></td> that comes after "Germany" in document order
  const followallTds: Locator = page.locator(
    "//td[text()='Germany']/following::td"
  );
  await expect(followallTds).toHaveCount(35);

  //following-sibling axes:- Get the <td></td> that sibiling "Roland Mendel" in document order
  const siblingTds: Locator = page.locator(
    "//td[text()='Roland Mendel']/following-sibling::td"
  );
  await expect(siblingTds).toHaveCount(1);
  //preceding :- Get the <td></td>  before
  const precedTds: Locator = page.locator("//td[text()='UK']/preceding::td");
  await expect(precedTds).toHaveCount(11);

  //preceding-sibling - get <td></td> to the left of "UK"
  const precedSiblingTds:Locator=page.locator("//td[text()='UK']/preceding-sibling::td[1]")
  await expect(precedSiblingTds).toHaveText("Helen Bennett")
});
