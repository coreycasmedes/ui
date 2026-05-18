import { test, expect } from "@playwright/test";

// ─── Routing ──────────────────────────────────────────────────────────────────

test.describe("routing", () => {
  test("home page loads with hero name", async ({ page }) => {
    await page.goto("/#/");
    await expect(page.getByText("Corey Casmedes").first()).toBeVisible();
  });

  test("navigating to travel page shows Travel heading", async ({ page }) => {
    await page.goto("/#/travel");
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
  });

  test("travel page renders globe canvas", async ({ page }) => {
    await page.goto("/#/travel");
    await expect(page.locator("canvas")).toBeVisible();
  });

  test("travel page renders globe canvas and heading", async ({ page }) => {
    await page.goto("/#/travel");
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
    await expect(page.locator("canvas")).toBeVisible();
  });

  test("navbar logo navigates home from travel", async ({ page }) => {
    await page.goto("/#/travel");
    await page.locator("header").getByRole("link", { name: /Corey Casmedes/ }).click();
    await expect(page.getByText("Software Engineer / Security")).toBeVisible();
  });
});

// ─── Navbar ───────────────────────────────────────────────────────────────────

test.describe("navbar", () => {
  test("More dropdown opens on hover", async ({ page }) => {
    await page.goto("/#/");
    await page.getByRole("button", { name: /More/ }).hover();
    await expect(page.getByText("Travel Map")).toBeVisible();
  });

  test("Travel Map in dropdown navigates to travel page", async ({ page }) => {
    await page.goto("/#/");
    await page.getByRole("button", { name: /More/ }).hover();
    await page.getByRole("link", { name: "Travel Map" }).click();
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
  });

  test("About button scrolls to about section", async ({ page }) => {
    await page.goto("/#/");
    await page.locator("header").getByRole("button", { name: "About" }).click();
    await expect(page.locator("#about")).toBeInViewport();
  });

  test("Experience button scrolls to experience section", async ({ page }) => {
    await page.goto("/#/");
    await page.locator("header").getByRole("button", { name: "Experience" }).click();
    await expect(page.locator("#experience")).toBeInViewport();
  });

  test("About from travel page navigates home and scrolls", async ({ page }) => {
    await page.goto("/#/travel");
    await page.locator("header").getByRole("button", { name: "About" }).click();
    await expect(page.locator("#about")).toBeInViewport({ timeout: 8000 });
  });
});

// ─── Mobile menu ──────────────────────────────────────────────────────────────

test.describe("mobile menu", () => {
  test("hamburger opens mobile menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only");
    await page.goto("/#/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await expect(page.getByRole("button", { name: /More/ })).toBeVisible();
  });

  test("mobile More accordion reveals Travel Map", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only");
    await page.goto("/#/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.getByRole("button", { name: /More/ }).click();
    await expect(page.getByRole("link", { name: "Travel Map" })).toBeVisible();
  });

  test("mobile Travel Map navigates to travel page", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only");
    await page.goto("/#/");
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.getByRole("button", { name: /More/ }).click();
    await page.getByRole("link", { name: "Travel Map" }).click();
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
  });
});

// ─── Hero buttons ─────────────────────────────────────────────────────────────

test.describe("hero buttons", () => {
  test("View Work button scrolls projects section into view", async ({ page }) => {
    await page.goto("/#/");
    await page.getByRole("button", { name: "View Work" }).click();
    await expect(page.locator("#projects")).toBeInViewport({ timeout: 3000 });
  });

  test("Experience button scrolls experience section into view", async ({ page }) => {
    await page.goto("/#/");
    await page.getByRole("main").getByRole("button", { name: "Experience" }).click();
    await expect(page.locator("#experience")).toBeInViewport({ timeout: 3000 });
  });
});

// ─── Home content ─────────────────────────────────────────────────────────────

test.describe("home content", () => {
  test("all four experience entries render", async ({ page }) => {
    await page.goto("/#/");
    for (const company of ["Startup", "Cruise", "Apple", "Capital One"]) {
      await expect(page.getByText(company).first()).toBeVisible();
    }
  });

  test("experience tech pills are visible", async ({ page }) => {
    await page.goto("/#/");
    await expect(page.getByText("React").first()).toBeVisible();
    await expect(page.getByText("PostgreSQL")).toBeVisible();
  });

  test("projects section renders", async ({ page }) => {
    await page.goto("/#/");
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.getByText("Wireguard Domain Tunnel")).toBeVisible();
  });
});

// ─── Footer ───────────────────────────────────────────────────────────────────

test.describe("footer", () => {
  test("renders copyright", async ({ page }) => {
    await page.goto("/#/");
    await expect(page.getByText(/All rights reserved/)).toBeVisible();
  });

  test("GitHub link points to correct URL", async ({ page }) => {
    await page.goto("/#/");
    const github = page.getByRole("link", { name: "GitHub" }).first();
    await expect(github).toHaveAttribute("href", "https://github.com/coreycasmedes");
  });

  test("LinkedIn link points to correct URL", async ({ page }) => {
    await page.goto("/#/");
    const linkedin = page.getByRole("link", { name: "LinkedIn" }).first();
    await expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/coreycasmedes");
  });

  test("footer Travel link navigates to travel page", async ({ page }) => {
    await page.goto("/#/");
    await page.getByRole("link", { name: "Travel" }).click();
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
  });
});
