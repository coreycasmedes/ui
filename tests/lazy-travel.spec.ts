import { test, expect } from "@playwright/test";

// Module URLs that belong to the travel globe (dev server and production chunk names).
const globeModule = /Travel|3d-globe|three|react-three/i;

test.describe("lazy travel route", () => {
  test("home page does not load the globe code", async ({ page }) => {
    const scripts: string[] = [];
    page.on("request", (req) => {
      if (req.resourceType() === "script") scripts.push(new URL(req.url()).pathname);
    });

    await page.goto("/#/");
    await expect(page.getByText("Software Engineer / Security")).toBeVisible();
    await page.waitForLoadState("networkidle");

    expect(scripts.length).toBeGreaterThan(0);
    expect(scripts.filter((url) => globeModule.test(url))).toEqual([]);
  });

  test("travel route loads the globe on demand", async ({ page }) => {
    const scripts: string[] = [];
    page.on("request", (req) => {
      if (req.resourceType() === "script") scripts.push(new URL(req.url()).pathname);
    });

    await page.goto("/#/");
    await page.waitForLoadState("networkidle");
    await page.getByRole("link", { name: "Travel" }).click();

    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
    await expect(page.locator("canvas")).toBeVisible();
    expect(scripts.some((url) => globeModule.test(url))).toBe(true);
  });
});
