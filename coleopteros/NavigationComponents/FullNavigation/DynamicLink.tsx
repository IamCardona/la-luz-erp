import { DynamicLink } from "../types"

// Import components
import Link from "next/link"

export default function DynamicLinkComponent(DynamicLink: DynamicLink) {
  return(
    <>
      <div className="full-navigation-component-container-menu">
        <Link href={DynamicLink.href}>
          <a className={`full-navigation-component-menu-link ${DynamicLink.href === DynamicLink.asPath ? "full-navigation-component-menu-link-active" : ""}`}>
            {DynamicLink.title}
          </a>
        </Link>
      </div>
    </>
  )
}