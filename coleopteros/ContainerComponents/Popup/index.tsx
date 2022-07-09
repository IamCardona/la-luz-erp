// Import types
import { Popup } from "../types"

// Import icons
import { CgClose } from 'react-icons/cg'

export default function PopupComponent(Popup: Popup) {
  return(
    // Main container popup
    <div className="container-components-main-container-popup">

      {/** Background */}
      <div className="container-components-background-popup" onClick={() => Popup.close()}></div>

      {/** Container body */}
      <div className="container-components-container-body-popup" style={{
        width: Popup.width,
        height: Popup.height,
        top: `calc(50% - ${Popup.height / 2}px)`,
        left: `calc(50% - ${Popup.width / 2}px)`,
      }}>

        {/** Close icon */}
        {Popup.closeIcon && (
          <CgClose className="container-components-close-icon-popup" />
        )}

      </div>
    </div>
  )
}