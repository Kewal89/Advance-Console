export interface VSConsoleTypes {
  label: string
  text?: "" | any
  highlight?: string | Array<string>
  type?: "log" | "info" | "warn" | "error"
  whole?: boolean
  textColor?: "" | "red" | "green" | "yellow" | "blue" | "purple" | "cyan"
  bgColor?: "" | "red" | "green" | "yellow" | "blue" | "purple" | "cyan"
}

export interface BSConsoleTypes {
  label: string
  text?: "" | any
  type?: "log" | "info" | "warn" | "error"
  textColor?: string
  bgColor?: string
  css?: string
}
export type OptionsTypes = "vscode" | "browser"

export interface VSConsoleReturnTypes {
  type: "log" | "info" | "warn" | "error"
  whole: boolean
  textColor: "" | "red" | "green" | "yellow" | "blue" | "purple" | "cyan"
  bgColor: "" | "red" | "green" | "yellow" | "blue" | "purple" | "cyan"
}

export interface BSConsoleReturnTypes {
  type: "log" | "info" | "warn" | "error"
  textColor: string
  bgColor: string
  css: string
}
