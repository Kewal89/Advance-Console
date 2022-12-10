import { VSConsoleTypes } from "./types/index.js"

const VSConsole = (props: VSConsoleTypes) => {

  const CONSOLE_TYPE = props.type ?? "info"
  const COLOR_LABEL_TEXT = props.whole ?? false

  const RED_TEXT = "\u001b[1;31m"
  const GREEN_TEXT = "\u001b[1;32m"
  const YELLOW_TEXT = "\u001b[1;33m"
  const BLUE_TEXT = "\u001b[1;34m"
  const PURPLE_TEXT = "\u001b[1;35m"
  const CYAN_TEXT = "\u001b[1;36m"

  const RED_BG = "\u001b[1;41m"
  const GREEN_BG = "\u001b[1;42m"
  const YELLOW_BG = "\u001b[1;43m"
  const BLUE_BG = "\u001b[1;44m"
  const PURPLE_BG = "\u001b[1;45m"
  const CYAN_BG = "\u001b[1;46m"

  const RESET_ALL = "\u001b[0m"

  var renderText = "" // Console Text
  var conText = "" // Console Text Color
  var conBG = "" // Console Text Background

  if (props.textColor === "red") {
    conText = RED_TEXT
  } else if (props.textColor === "green") {
    conText = GREEN_TEXT
  } else if (props.textColor === "yellow") {
    conText = YELLOW_TEXT
  } else if (props.textColor === "blue") {
    conText = BLUE_TEXT
  } else if (props.textColor === "purple") {
    conText = PURPLE_TEXT
  } else if (props.textColor === "cyan") {
    conText = CYAN_TEXT
  }

  if (props.bgColor === "red") {
    conBG = RED_BG
  } else if (props.bgColor === "green") {
    conBG = GREEN_BG
  } else if (props.bgColor === "yellow") {
    conBG = YELLOW_BG
  } else if (props.bgColor === "blue") {
    conBG = BLUE_BG
  } else if (props.bgColor === "purple") {
    conBG = PURPLE_BG
  } else if (props.bgColor === "cyan") {
    conBG = CYAN_BG
  }

  if (props.highlight && props.text) {
    conBG = conBG ? conBG : GREEN_BG
    var HIGHLIGHT_TEXT: Array<string> = []
    if (typeof props.highlight === "string") HIGHLIGHT_TEXT = [props.highlight]
    else if (Array.isArray(props.highlight)) {
      var HT_SET = new Set(props.highlight)
      HIGHLIGHT_TEXT = [...HT_SET]
    }

    renderText += props.label + " " + JSON.stringify(props.text)

    for (var i = 0; i < HIGHLIGHT_TEXT.length; i++) {
      var RegExText = new RegExp(HIGHLIGHT_TEXT[i], "g")
      // console.info("Before DEBUGGING :", renderText)
      renderText = renderText.replace(RegExText, conText + conBG + HIGHLIGHT_TEXT[i] + RESET_ALL)
      // console.info("After DEBUGGING :", renderText)
    }
  } else {
    renderText = conText + conBG + props.label + (COLOR_LABEL_TEXT ? "" : RESET_ALL) + (props.text ? JSON.stringify(props.text) : "") + RESET_ALL
  }
  // console.info("===DEBUG===\n", renderText)

  try {
    if (CONSOLE_TYPE === "info") {
      console.info(renderText)
    } else if (CONSOLE_TYPE === "log") {
      console.log(renderText)
    } else if (CONSOLE_TYPE === "warn") {
      console.warn(renderText)
    } else if (CONSOLE_TYPE === "error") {
      console.error(renderText)
    }
  } catch (err) {
    console.info("===FALLBACK CONSOLE===\n", props.text)
  }
}

const BSConsole = () => {
  //TODO: Support For Browsers
  return true
}

module.exports = { VSConsole, BSConsole }


// Usage
const randomText = "{Accuracy: 10, latitude: 12, limit: 10}"
const position = "{Accuracy: 10, latitude: 12, longitude: 10}"
// Basic Usage
VSConsole({ label: "Location Permission Denied", type: "info", textColor: "red", bgColor: "yellow" })
// Highlight Text
VSConsole({ label: "Position :", text: randomText, highlight: "Accuracy", bgColor: "cyan" })
// Highlight Multiple Text
VSConsole({ label: "Position :", text: position, highlight: ["latitude", "longitude"] })