import { VSConsole, BSConsole } from "./utils"

export { VSConsole, BSConsole }

// Usage
const randomText = "{Accuracy: 10, latitude: 12, limit: 10}"
const position = "{Accuracy: 10, latitude: 12, longitude: 10}"
// Basic Usage
VSConsole({ label: "Location Permission Denied :", text: "test", highlight: [`"test"`] })
// Highlight Text
// BSConsole({ label: "Position :", text: randomText, highlight: "Accuracy", bgColor: "cyan" })
// Highlight Multiple Text
// BSConsole({ label: "Position :", text: position, highlight: ["latitude", "longitude"] })
