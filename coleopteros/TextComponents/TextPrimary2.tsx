import type { Text } from './types'

export default function TextPrimary2(Text: Text) {
  return(
    <p className="text-components-text-primary-2" style={{
      textAlign: Text.align
    }}>
      {Text.text}
    </p>
  )
}