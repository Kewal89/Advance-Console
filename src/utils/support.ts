import { OptionsTypes } from '../types/index'

const FinalizeOptions = async (type: OptionsTypes) => {
  let Configs: any
  let fs: any
  if (type === "vscode") {
    try {
      fs = require("fs")
      try {
        const { readFileSync } = require('fs-extra')
        Configs = await readFileSync('../../.adv.json')

        // console.info(Configs)
      } catch (err) {
        new Error(`Error: File Not Found.`)
      }
    } catch {
      new Error(`Error: Switching To Browser Only Mode.`)
    }
  }

  const Options = ReturnOptions(Configs ? JSON.parse(Configs.toString()) : {}, type)
  return Options
}

const ReturnOptions = (options: any, type: OptionsTypes) => {
  if (type === "vscode") {
    return {
      type: options?.type || 'info',
      whole: options?.whole || false,
      textColor: options?.textColor || "",
      bgColor: options?.bgColor || ""
    }
  } else {
    return {
      type: options?.type || 'info',
      textColor: options?.textColor || "",
      bgColor: options?.bgColor || "",
      css: options?.css || ""
    }
  }
}


export { FinalizeOptions, ReturnOptions }