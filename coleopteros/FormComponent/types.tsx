import { ReactNode } from "react"

export interface Form {
  elements: Row[],
  action: (values: any) => void 
  update: boolean,
  button: {
    text: string,
    type: "primary" | "secondary",
    width: string | number
  }
}

interface Row {
  type: "row-of-fields" | "HTMLElement",
  aling?: "space-between" | "space-around" | "center",
  fields?: (TextField | NumberField | TextAreaField | OptionField)[],
  element?: ReactNode
}

interface Field {
  type: "text" | "number" | "textarea" | "option",
  name: string,
  label: string,
  required: boolean,
  minWidth?: number,
  maxWidth?: number,
  icon?: ReactNode,
  value?: string
}

export interface TextField extends Field {
  action?: (value: string) => string
}
export interface NumberField extends Field {
  floats: boolean,
  max?: number,
  min?: number,
}
export interface TextAreaField extends Field {
  height: number,
  maxLength: number,
  action?: (value: string) => string
}
export interface OptionField extends Field {
  options: string[],
  otherOption: boolean,
  defaultOption: string,
  specifyOption: boolean,
  onChanceHanlder?: (value: string) => void
}