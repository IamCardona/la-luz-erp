import { ReactNode } from "react";

export interface Popup {
  width: number,
  height: number,
  content: ReactNode
  close: () => any,
  closeIcon?: boolean
}