import { FullNavigation } from '../types'

// Import hoooks
import { useState } from 'react'
import { useRouter } from 'next/router'

// Import icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'

// Import components
import Link from 'next/link'
import DynamicLinkComponent from './DynamicLink'
import MenuSection from './MenuSection'

export default function FullNavigationComponent(FullNavigation: FullNavigation) {
  const router = useRouter()
  const [sideBar, setSideBar] = useState(false)

  return(
    <>
      {/** Container NavBar */}
      <nav className="full-navigation-component-container-navbar">

        {/** Container navbar icons */}
        <div className="x-between-y-center">
          <div onClick={() => setSideBar(!sideBar)}>
            {sideBar ? <CgClose className="full-navigation-component-icon" /> : <GiHamburgerMenu className="full-navigation-component-icon" />}
          </div>
          <div>
            <Link href="/">
              <a>
                <div><h1><span className="full-navigation-component-navbar-appname">{FullNavigation.appName}</span></h1></div>
              </a>
            </Link>
          </div>
        </div>

      </nav>

      {/** Container sidebar */}
      {sideBar && (
        <div className="full-navigation-container-sidebar">
          <h4 className="primary-text">MENU</h4>
          <div>
            {FullNavigation.sidebarNavigation.map((item, i) => {
              if(item.icon) return <MenuSection key={i} icon={item.icon} text={item.text} />
              return (
                <div key={i} style={{
                  paddingLeft: item.child && "1rem"
                }}>
                  {item.dymamicLinks.map((link, i) => {
                    return <DynamicLinkComponent key={i} href={link.href} asPath={router.asPath} title={link.title} />
                  })}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/** Body */}
      <div className="full-navigation-container-body">
        {FullNavigation.children}
      </div>
    </>
  )
}