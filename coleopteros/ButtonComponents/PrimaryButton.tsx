// Import types
import { Button } from './types'

export default function PrimaryButtonComponent(Button: Button) {
  return(
    <button type={Button.typeAction === "submit" ? "submit" : "button"}
      className="button-components-generic-styles button-components-primary-button"
      style={{
        width: Button.width,
        height: Button.height
      }}
      onClick={Button.action ? Button.action : () => null}
    >
      {Button.text}
    </button>
  )
}