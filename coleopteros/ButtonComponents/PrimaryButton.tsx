// Import types
import { Button } from './types'

export default function PrimaryButtonComponent(Button: Button) {
  return(
    <button type={Button.typeAction === "submit" ? "submit" : "button"}
      className={
        `button-components-generic-styles ${
          Button.style === "primary" ? "button-components-primary-button" : "button-components-primary-button-bg-white"
        }`
      }
      style={{
        width: Button.width,
        height: Button.height,
        backgroundColor: Button.color,
        color: Button.color && "white",
        borderColor: Button.color,
        display: Button.icon ? "flex" : "",
        alignItems: Button.icon ? "center" : "",
      }}
      onClick={Button.action ? Button.action : () => null}
    >
      {(Button.icon && Button.iconPosition === "left") && Button.icon}
      {Button.text}
      {(Button.icon && Button.iconPosition === "right") && Button.icon}
    </button>
  )
}