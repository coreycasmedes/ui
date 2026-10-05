import { test, expect } from "@playwright/test";

const SITE = "https://corey.casmedes.com";

test.describe("share metadata", () => {
  test("title and description describe the site", async ({ page }) => {
    await page.goto("/#/");
    await expect(page).toHaveTitle(/Corey Casmedes — .+/);
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toContain("Corey Casmedes");
    expect(description!.length).toBeGreaterThanOrEqual(50);
    expect(description!.length).toBeLessThanOrEqual(200);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${SITE}/`);
  });

  test("Open Graph and Twitter card tags are present", async ({ page }) => {
    await page.goto("/#/");
    const content = (selector: string) => page.locator(selector).getAttribute("content");

    expect(await content('meta[property="og:type"]')).toBe("website");
    expect(await content('meta[property="og:url"]')).toBe(`${SITE}/`);
    expect(await content('meta[property="og:title"]')).toContain("Corey Casmedes");
    expect(await content('meta[property="og:description"]')).toBeTruthy();
    expect(await content('meta[property="og:image"]')).toBe(`${SITE}/og.png`);
    expect(await content('meta[name="twitter:card"]')).toBe("summary_large_image");
    expect(await content('meta[name="twitter:image"]')).toBe(`${SITE}/og.png`);
  });

  test("share image is served as a PNG", async ({ request }) => {
    const res = await request.get("/og.png");
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image/png");
    expect((await res.body()).length).toBeGreaterThan(10_000);
  });
});
