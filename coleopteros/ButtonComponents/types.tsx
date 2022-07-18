import { ReactNode } from "react";

export interface Button {
  text: string,
  typeAction: "submit" | "button",
  style: "primary" | "primary-bg-white" | "secondary",
  action?: () => any,
  width?: string | number,
  height?: string| number,
  icon?: ReactNode,
  iconPosition?: "left" | "right"
}