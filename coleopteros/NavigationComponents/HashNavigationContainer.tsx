import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import getHashPath from "./utils/getHashPath"
import { HashNavigationContainer } from "./types"

export default function HashNavigationContainerComponent(HashNavigationContainer: HashNavigationContainer) {
  const router = useRouter()
  const [hashRoute, setHashRoute] = useState("")

  useEffect(() => {
    setHashRoute(getHashPath(router.asPath))
  }, [router.asPath])

  return(
    <>
      {HashNavigationContainer.components.map(component => {
        if(component.route === hashRoute) return <div key="hash-component">{component.component}</div>
      })}
    </>
  )
}