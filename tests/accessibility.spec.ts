import { test, expect } from "@playwright/test";

test.describe("hero semantics", () => {
  test("the name is the page's h1", async ({ page }) => {
    await page.goto("/#/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Corey Casmedes" }),
    ).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("headline words are separated by real spaces", async ({ page }) => {
    await page.goto("/#/");
    await expect(
      page.getByText("Security Engineering and Full Stack Applications"),
    ).toBeVisible();
  });
});

test.describe("skip link", () => {
  test("first Tab reaches the skip link, which focuses main", async ({ page, isMobile }) => {
    test.skip(isMobile, "keyboard only");
    await page.goto("/#/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
    await expect(page).toHaveURL(/#\/$/);
  });
});

test.describe("More dropdown keyboard", () => {
  test("opens with Enter and closes with Escape", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/#/");
    const trigger = page.locator("header").getByRole("button", { name: /More/ });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("link", { name: "Travel Map" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("link", { name: "Travel Map" })).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("tabbing out of the dropdown closes it", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/#/");
    const trigger = page.locator("header").getByRole("button", { name: /More/ });
    await trigger.focus();
    await page.keyboard.press("Enter");
    // Travel Map, GitHub, LinkedIn, then out to Contact
    for (let i = 0; i < 4; i++) await page.keyboard.press("Tab");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("a route change closes the open dropdown", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/#/");
    const trigger = page.locator("header").getByRole("button", { name: /More/ });
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.evaluate(() => { window.location.hash = "#/travel"; });
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("no placeholder blog links remain", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/#/");
    await page.locator("header").getByRole("button", { name: /More/ }).click();
    await expect(page.getByRole("link", { name: "Writing" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Notes" })).toHaveCount(0);
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("hamburger reports its state and Escape closes the menu", async ({ page }) => {
    await page.goto("/#/");
    const toggle = page.getByRole("button", { name: "Toggle menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#mobile-menu")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-menu")).toBeHidden();
  });
});

test.describe("not found", () => {
  test("unknown routes render a 404 with a way home", async ({ page }) => {
    await page.goto("/#/does-not-exist");
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(
      page.getByRole("heading", { level: 1, name: "Corey Casmedes" }),
    ).toBeVisible();
  });
});

test.describe("projects", () => {
  test("patent links to the granted patent it names", async ({ page }) => {
    await page.goto("/#/");
    await expect(page.locator("#projects")).toContainText("Patent #11,516,295");
    await expect(
      page.locator("#projects a", { hasText: "Vehicle Trip Loss" }),
    ).toHaveAttribute("href", "https://patents.google.com/patent/US11516295B1");
  });
});
