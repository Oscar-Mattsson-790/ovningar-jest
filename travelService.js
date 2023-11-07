let origin = null;
let destination = null;
let currentPosition = null;

const travelService = {
  reset() {
    origin = null;
    destination = null;
    currentPosition = null;
  },

  setOrigin(newOrigin) {
    if (typeof newOrigin !== "string" || newOrigin === "") {
      throw new Error("Origin must be a non-empty string");
    }
    origin = newOrigin;
    currentPosition = newOrigin;
    return true;
  },

  bookTrip(newDestination) {
    if (
      typeof newDestination !== "string" ||
      newDestination === "" ||
      newDestination === origin
    ) {
      throw new Error("Invalid destination");
    }
    destination = newDestination;
    return true;
  },

  goOnTrip() {
    if (!origin || !destination) {
      throw new Error(
        "Both origin and destination must be set before traveling"
      );
    }
    if (origin === destination) {
      return false;
    }
    currentPosition = destination;
    return true;
  },

  getPosition() {
    if (currentPosition === null) {
      throw new Error("Position not set");
    }
    return currentPosition;
  },
};

module.exports = travelService;
