import type { CardContainer } from "./types"

export default function CardContainer(CardContainer: CardContainer) {
  return(
    <div className="card-container-main-container" style={{
      width: CardContainer.width,
      height: CardContainer.height,
      padding: CardContainer.padding,
      margin: CardContainer.margin,
    }}>
      {CardContainer.children}
    </div>
  )
}