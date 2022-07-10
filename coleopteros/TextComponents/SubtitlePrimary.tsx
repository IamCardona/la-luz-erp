import type { Text } from "./types";

export default function SubtitlePrimary(Text: Text) {
  return(
    <h2 className="text-components-subtitle-primary" style={{
      textAlign: Text.align
    }}>{Text.text}</h2>
  )
}