import type { Text } from './types'

export default function TextPrimary1(Text: Text) {
  return(
    <p className="text-components-text-primary-1" style={{
      textAlign: Text.align
    }}>
      {Text.text}
    </p>
  )
}