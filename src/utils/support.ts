import { readFileSync } from 'fs-extra'
import { OptionsTypes } from '../types/index'

const FinalizeOptions = async (type: OptionsTypes) => {
  let Configs: any
  try {
    Configs = await readFileSync('../../.adv.json')
    // console.info(Configs)
  } catch (err) {
    new Error(`Error: File Not Found.`)
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