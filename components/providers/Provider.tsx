import { Providers } from "./types"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import getItemFromArray from "../../utils/getItemFromArray"

// Import components
import AluminumComponent from "./providersTypes/Aluminum"
import Crystal from "./providersTypes/Crystal"
import Supplies from "./providersTypes/Supplies"

export default function Provider(Provider: Providers) {
  const router = useRouter()
  const [provider, setProvider] = useState({})

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    setProvider(getItemFromArray(Provider.state.providers, "_id", urlSearchParams.get("_id")))
  }, [router.asPath])

  if(provider.provider === "ALUMINIO") return <AluminumComponent authUser={Provider.authUser} state={Provider.state} setState={Provider.setState} provider={provider} setNotification={Provider.setNotification}  />
  if(provider.provider === "CRISTAL") return <Crystal authUser={Provider.authUser} state={Provider.state} setState={Provider.setState} provider={provider} setNotification={Provider.setNotification}  />
  if(provider.provider === "SUMINISTROS") return <Supplies authUser={Provider.authUser} state={Provider.state} setState={Provider.setState} provider={provider} setNotification={Provider.setNotification}  />
} 