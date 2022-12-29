import fs from 'fs'
import { OptionsTypes, VSConsoleReturnTypes, BSConsoleReturnTypes } from '../types/index'

const FinalizeOptions = async (type: OptionsTypes) => {
  try {
    const Configs = await fs.readFileSync('../../.adv.json')
    const Options = ReturnOptions(JSON.parse(Configs.toString()), type)
    console.info("Configs: ", Configs.toString())
    return Options
  } catch (err) {
    throw new Error(`Error: File Not Found.`)
  }
}

const ReturnOptions = (options: any, type: OptionsTypes) => {
  if (type === "vscode") {
    return {
      type: options.type || 'info',
      whole: options.whole || false,
      textColor: options.textColor || "",
      bgColor: options.bgColor || ""
    }
  } else {
    return {
      type: options.type || 'info',
      textColor: options.textColor || "",
      bgColor: options.bgColor || "",
      css: options.css || ""
    }
  }
}


export { FinalizeOptions, ReturnOptions }