import { AuthUserContext } from "next-firebase-auth";

export interface Providers {
  authUser: AuthUserContext,
  state: any,
  setState: any,
  setLoading?: any
  setNotification?: any
}


export interface ProviderInfo {
  provider: {
    name: string,
    provider: string,
    profiles?: any,
    crystal?: any,
    supplies?: any,
    _id: string
  },
  state: any,
  setState: any,
  authUser: AuthUserContext,
  setNotification?: any,
}

export interface Profiles {
  profiles: any,
  route: string,
  edit: boolean,
  state: any,
  setState: any
}

export interface PriceInput {
  price: string,
  route: string,
  edit: boolean,
  state: any,
  setState: any
}