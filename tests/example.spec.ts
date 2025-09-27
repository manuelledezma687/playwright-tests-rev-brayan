import { test, expect } from "@playwright/test";
import { BasePage } from "./pages/BasePage";

test.describe("Suite de tests", () => {
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
  });

  test("Test input Iphone", async ({ page }) => {
    await test.step("Visita la página", async () => {
      await basePage.goto();
    });

    await test.step("Realiza una búsqueda", async () => {
      await basePage.searchProduct("Iphone");
      await basePage.enterKey.press("Enter");
      await page.pause();
    });
  });

  test("Test click to MacBook", async ({ page }) => {
    await test.step("Visita la página", async () => {
      await basePage.goto();
    });

    await test.step("Click en producto", async () => {
      await basePage.clickProduct("MacBook");
      await page.screenshot({
        path: "./captures/" + Date.now() + "screenshot.jpg",
      });
      await page.pause();
    });
  });
});
