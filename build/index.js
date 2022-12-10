"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.BSConsole = exports.VSConsole = void 0
const utils_1 = require("./utils")
Object.defineProperty(exports, "VSConsole", {
  enumerable: true,
  get: function () {
    return utils_1.VSConsole
  },
})
Object.defineProperty(exports, "BSConsole", {
  enumerable: true,
  get: function () {
    return utils_1.BSConsole
  },
})
// Usage
// const randomText = "{Accuracy: 10, latitude: 12, limit: 10}"
// const position = "{Accuracy: 10, latitude: 12, longitude: 10}"
// Basic Usage
// BSConsole({ label: "Location Permission Denied :", type: "info", text: "test", textColor: "red", bgColor: "yellow" })
// Highlight Text
// BSConsole({ label: "Position :", text: randomText, highlight: "Accuracy", bgColor: "cyan" })
// Highlight Multiple Text
// BSConsole({ label: "Position :", text: position, highlight: ["latitude", "longitude"] })
