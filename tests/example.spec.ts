import { test, expect } from "@playwright/test";

test.describe("Suite de tests", async () => {
  test("Test input Iphone", async ({ page }) => {
    await test.step("Visita la página", async () => {
      await page.goto("https://opencart.abstracta.us/");
    });

    await test.step("Realiza una búsqueda", async () => {
      await page.getByPlaceholder("Search").fill("Iphone");

      await page.getByPlaceholder("Search").press("Enter");
      await page.pause();
    });
  });

  test("Test click to MacBook", async ({ page }) => {
    await test.step("Visita la página", async () => {
      await page.goto("https://opencart.abstracta.us/");
    });

    await test.step("Click en producto", async () => {
      await page.getByText("MacBook").click();
      await page.pause();
    });
  });
});
