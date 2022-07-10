import { ReactNode } from "react";

export interface Popup {
  width: number,
  height: number,
  content: ReactNode
  close: () => any,
  closeIcon?: boolean
}

export interface CardContainer {
  width?: string,
  height?: string,
  padding?: string,
  margin?: string,
  children: ReactNode
}