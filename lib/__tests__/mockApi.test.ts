import { initializeLocalStorage, mockApi } from "../api/mock-api";

describe("User Cabinet Mock API", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    initializeLocalStorage();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("should initialize default user profile", async () => {
    const profile = await mockApi.getUserProfile();
    expect(profile).toEqual({
      id: "user-1",
      name: "Jane Doe",
      email: "jane.doe@email.com",
      accountType: "Premium",
    });
  });

  test("should update user profile", async () => {
    const updates = { name: "John Smith", email: "john@example.com" };
    const updatedProfile = await mockApi.updateUserProfile(updates);

    expect(updatedProfile.name).toBe("John Smith");
    expect(updatedProfile.email).toBe("john@example.com");
    expect(updatedProfile.accountType).toBe("Premium"); // Should preserve existing values
  });

  test("should get login history", async () => {
    const history = await mockApi.getLoginHistory();
    expect(Array.isArray(history)).toBe(true);
    expect(history.length).toBeGreaterThan(0);
    expect(history[0]).toHaveProperty("browser");
    expect(history[0]).toHaveProperty("os");
    expect(history[0]).toHaveProperty("status");
  });

  test("should get and update notification settings", async () => {
    const settings = await mockApi.getNotificationSettings();
    expect(settings).toHaveProperty("emailNotifications");
    expect(settings).toHaveProperty("priceAlerts");

    const updated = await mockApi.updateNotificationSettings({
      emailNotifications: false,
    });
    expect(updated.emailNotifications).toBe(false);
  });

  test("should get account status", async () => {
    const status = await mockApi.getAccountStatus();
    expect(status).toHaveProperty("plan");
    expect(status).toHaveProperty("features");
    expect(status).toHaveProperty("usage");
    expect(status.plan).toBe("Premium");
  });

  test("should simulate API delays", async () => {
    const startTime = Date.now();
    await mockApi.getUserProfile();
    const endTime = Date.now();

    // Should take at least 200ms (simulated delay)
    expect(endTime - startTime).toBeGreaterThanOrEqual(200);
  });
});
