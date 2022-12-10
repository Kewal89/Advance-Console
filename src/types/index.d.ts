export interface VSConsoleTypes {
  label: string
  text?: "" | any
  highlight?: string | Array<string>
  type?: "log" | "info" | "warn" | "error"
  whole?: boolean
  textColor?: "" | "red" | "green" | "yellow" | "blue" | "purple" | "cyan"
  bgColor?: "" | "red" | "green" | "yellow" | "blue" | "purple" | "cyan"
}
