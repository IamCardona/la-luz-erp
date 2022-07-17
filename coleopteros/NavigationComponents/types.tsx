import { ReactNode } from "react"

export interface HashNavigationContainer {
  components: ({
    route: string,
    component: ReactNode
  })[],
  loading: boolean,
  error404: ReactNode
}

export interface FullNavigation {
  appName: string,
  sidebarNavigation: ({
    dymamicLinks: ({href: string, title: string})[],
    child: boolean
  } | MenuSection)[],
  children: ReactNode
}

export interface MenuSection {
  icon: ReactNode,
  text: string
}

export interface DynamicLink {
  href: string,
  title: string,
  asPath: string
}
