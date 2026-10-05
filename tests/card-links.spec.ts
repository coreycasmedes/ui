import { test, expect } from "@playwright/test";

test.describe("card links", () => {
  test("home page has no placeholder # links", async ({ page }) => {
    await page.goto("/#/");
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator('a[href="#"]')).toHaveCount(0);
  });

  test("linked cards open externally in a new tab", async ({ page }) => {
    await page.goto("/#/");
    const cards = page.locator("#experience li > a, #projects li > a");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i)).toHaveAttribute("href", /^https:\/\//);
      await expect(cards.nth(i)).toHaveAttribute("target", "_blank");
      await expect(cards.nth(i)).toHaveAttribute("rel", /noopener/);
    }
  });

  test("cards without a link are not anchors", async ({ page }) => {
    await page.goto("/#/");
    const cruise = page.locator("#experience li", { hasText: "Cruise" });
    await expect(cruise).toBeVisible();
    await expect(cruise.locator("a")).toHaveCount(0);
  });

  test("Wireguard project links to its repository", async ({ page }) => {
    await page.goto("/#/");
    await expect(
      page.locator("#projects a", { hasText: "Wireguard Domain Tunnel" }),
    ).toHaveAttribute(
      "href",
      "https://github.com/coreycasmedes/wireguard-domain-tunnel",
    );
  });
});
