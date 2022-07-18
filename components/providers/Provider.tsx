import { Providers } from "./types"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import getItemFromArray from "../../utils/getItemFromArray"

export default function Provider(Provider: Providers) {
  const router = useRouter()
  const [provider, setProvider] = useState({})

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    setProvider(getItemFromArray(Provider.state.providers, "_id", urlSearchParams.get("_id")))
  }, [router.asPath])

  return(
    <>
      <h1>{provider.name}</h1>
    </>
  )
}