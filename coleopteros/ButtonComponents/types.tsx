export interface Button {
  text: string,
  typeAction: "submit" | "button",
  style: "primary" | "secondary",
  action?: () => any,
  width?: string | number,
  height?: string| number
}