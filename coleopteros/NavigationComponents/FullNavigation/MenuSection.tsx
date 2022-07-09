import { MenuSection } from '../types'

export default function MenuSectionComponent(MenuSection: MenuSection) {
  return(
    <>
      <div className="full-navigation-component-menu-section">
        {MenuSection.icon}
        <p>{MenuSection.text}</p>
      </div>
    </>
  )
}