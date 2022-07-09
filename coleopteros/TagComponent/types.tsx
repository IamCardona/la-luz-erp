export interface Tag {
  text: string,
  spesific_style: "warning" | "success" | "info"
  action?: () => any
}
