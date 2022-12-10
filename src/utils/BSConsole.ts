import { BSConsoleTypes } from "../types/index.js"

const BSConsole = (props: BSConsoleTypes) => {
  const CONSOLE_TYPE = props.type ?? "info"
  const stringText = props.text ? JSON.stringify(props.text) : ""
  var renderText =
    props.label + " " + stringText.substring(1, stringText.length - 1) // Console Text
  const conText = props.textColor ?? ""
  const conBG = props.bgColor ?? ""
  // console.info("===DEBUG===\n", renderText)

  const CSS = props.css
    ? props.css
    : "color:" + conText + ";background:" + conBG

  try {
    if (CONSOLE_TYPE === "info") {
      console.info("%c" + renderText, CSS)
    } else if (CONSOLE_TYPE === "log") {
      console.log("%c" + renderText, CSS)
    } else if (CONSOLE_TYPE === "warn") {
      console.warn("%c" + renderText, CSS)
    } else if (CONSOLE_TYPE === "error") {
      console.error("%c" + renderText, CSS)
    }
  } catch (err) {
    console.info("===FALLBACK CONSOLE===\n", props.text)
  }
}

export { BSConsole }