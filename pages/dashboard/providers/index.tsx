import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth'
import { useState } from 'react'
import Loader from '../../../coleopteros/UtilComponents/Loader'

// Import layouts
import ManagerLayout from '../../../components/layouts/ManagerLayout'

// Import components
import Providers from '../../../components/providers'

import HashNavigationContainerComponent from '../../../coleopteros/NavigationComponents/HashNavigationContainer'

const ProvidersView = () => {
  const [state, setState] = useState({})
  const AuthUser = useAuthUser()

  if(AuthUser.claims.manager) return(
    <ManagerLayout title={`Dashboard - ${AuthUser.displayName}`}>
      <HashNavigationContainerComponent components={[
        {route: "#list", component: <Providers authUser={AuthUser} state={state} setState={setState} />}
      ]} />
    </ManagerLayout>
  )

  return <></>
}

export default withAuthUser({
  whenAuthed: AuthAction.RENDER,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: Loader,
  authPageURL: '/login'
})(ProvidersView)