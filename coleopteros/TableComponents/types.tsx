import { ReactNode } from "react";

export interface ViewTable {
  title: string,
  icon: ReactNode,
  data: any[],
  headings: string[],
  refs: string[],
  href: string,
  hrefIds: string[]
}