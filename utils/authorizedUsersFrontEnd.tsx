import getRole from "./getRole";

export default function authorizedUsersFrontEnd(
  authUser: any,
  authorizedUsers: string[]
) {
  try {
    const role = getRole(authUser.claims)

    if(!authorizedUsers.includes(role)) {
      throw "Not authorized"
    }
    
    return {
      props: {
        message: "OK!"
      }
    }

  } catch(e) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }
}