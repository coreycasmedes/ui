import { test, expect } from "@playwright/test";

// Base element styles must not override Tailwind utilities on the same element.
test.describe("base layer", () => {
  test("card title honours font-medium and leading-snug", async ({ page }) => {
    await page.goto("/#/");
    const title = page.locator("#experience h3").first();
    await expect(title).toHaveCSS("font-weight", "500");
    // leading-snug (1.375) on text-base (16px)
    await expect(title).toHaveCSS("line-height", "22px");
  });

  test("card title changes colour on hover", async ({ page, isMobile }) => {
    test.skip(isMobile, "hover is desktop only");
    await page.goto("/#/");
    const title = page.locator("#experience h3").first();
    await title.scrollIntoViewIfNeeded();
    await expect(title).toHaveCSS("color", "rgb(250, 250, 255)");
    await title.hover();
    await expect(title).toHaveCSS("color", "rgb(236, 235, 228)");
  });

  test("headings without utilities keep the base style", async ({ page }) => {
    await page.goto("/#/travel");
    const heading = page.getByRole("heading", { name: "Travel" });
    await expect(heading).toHaveCSS("font-weight", "600");
    await expect(heading).toHaveCSS("color", "rgb(250, 250, 255)");
  });

  test("focus ring still shows on keyboard focus", async ({ page, isMobile }) => {
    test.skip(isMobile, "keyboard focus is desktop only");
    await page.goto("/#/");
    await page.keyboard.press("Tab");
    await expect(page.locator(":focus-visible")).toHaveCSS("outline-style", "solid");
  });
});
