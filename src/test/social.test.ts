import { describe, it, expect } from "vitest";
import { formatFollowers } from "@/lib/social";
describe("formatFollowers", () => {
  it("shortens thousands", () => expect(formatFollowers(12500)).toBe("12.5K"));
  it("shortens millions", () => expect(formatFollowers(2000000)).toBe("2M"));
  it("keeps small numbers", () => expect(formatFollowers(850)).toBe("850"));
});
