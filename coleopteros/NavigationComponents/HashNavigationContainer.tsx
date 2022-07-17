import { useEffect, useState } from "react"
import { HashNavigationContainer } from "./types"
import Loader from "../UtilComponents/Loader"
import getHashPath from "./utils/getHashPath"
import { useRouter } from "next/router"

export default function HashNavigationContainerComponent(HashNavigationContainer: HashNavigationContainer) {
  const router = useRouter()
  const [hashRoute, setHashRoute] = useState("")
  
  let hashRendered = "not-found"

  useEffect(() => {
    setHashRoute(getHashPath(router.asPath))
  }, [router.asPath])

  if(HashNavigationContainer.loading) return <Loader />

  return(
    <>
      {HashNavigationContainer.components.map(component => {
        if(component.route === hashRoute) {
          hashRendered = component.route
          return <div key="hash-component">{component.component}</div>
        }
      })}
      {hashRendered !== hashRoute && (
        <div>
          {HashNavigationContainer.error404}
        </div>
      )}
    </>
  )
}