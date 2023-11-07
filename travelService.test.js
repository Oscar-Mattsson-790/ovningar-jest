const travelService = require("./travelService.js");

describe("travelService module", () => {
  beforeEach(() => {
    travelService.reset();
  });

  describe("setOrigin", () => {
    it("should return true if a non-empty string is provided for origin", () => {
      const expected = true;
      const actual = travelService.setOrigin("Stockholm");
      expect(actual).toBe(expected);
    });

    it("should throw an error if an empty string is provided for origin", () => {
      expect(() => travelService.setOrigin("")).toThrow();
    });
  });

  describe("bookTrip", () => {
    it("should return true if a valid destination is provided", () => {
      travelService.setOrigin("Stockholm");
      const expected = true;
      const actual = travelService.bookTrip("Gothenburg");
      expect(actual).toBe(expected);
    });

    it("should throw an error if destination is the same as origin", () => {
      travelService.setOrigin("Stockholm");
      expect(() => travelService.bookTrip("Stockholm")).toThrow();
    });

    it("should throw an error if an empty string is provided for destination", () => {
      expect(() => travelService.bookTrip("")).toThrow();
    });
  });

  describe("goOnTrip", () => {
    it("should return true if origin and destination have been set correctly", () => {
      travelService.setOrigin("Stockholm");
      travelService.bookTrip("Gothenburg");
      const expected = true;
      const actual = travelService.goOnTrip();
      expect(actual).toBe(expected);
    });

    it("should throw an error if origin has not been set", () => {
      travelService.bookTrip("Gothenburg");
      expect(() => travelService.goOnTrip()).toThrow();
    });

    it("should throw an error if destination has not been set", () => {
      travelService.setOrigin("Stockholm");
      expect(() => travelService.goOnTrip()).toThrow();
    });
  });

  describe("getPosition", () => {
    it("should return origin if trip has not been made", () => {
      travelService.setOrigin("Stockholm");
      const expected = "Stockholm";
      const actual = travelService.getPosition();
      expect(actual).toBe(expected);
    });

    it("should return destination if trip has been made", () => {
      travelService.setOrigin("Stockholm");
      travelService.bookTrip("Gothenburg");
      travelService.goOnTrip();
      const expected = "Gothenburg";
      const actual = travelService.getPosition();
      expect(actual).toBe(expected);
    });

    it("should throw an error if neither origin nor destination is set", () => {
      expect(() => travelService.getPosition()).toThrow();
    });
  });
});
