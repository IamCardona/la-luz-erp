import { AuthUserContext } from "next-firebase-auth";

export interface Providers {
  authUser: AuthUserContext,
  state: any,
  setState: any
}