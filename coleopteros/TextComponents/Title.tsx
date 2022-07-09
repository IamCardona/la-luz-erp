import { Text } from './types'

export default function TitleComponent(Text: Text) {
  return(
    <h1 className="text-components-title" style={{
      textAlign: Text.align
    }}>
      {Text.text}
    </h1>
  )
}