import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth'
import Loader from '../../../coleopteros/UtilComponents/Loader'

// Import layouts
import ManagerLayout from '../../../components/layouts/ManagerLayout'

// Import components
import Providers from '../../../components/providers'

import HashNavigationContainerComponent from '../../../coleopteros/NavigationComponents/HashNavigationContainer'

const ProvidersView = () => {
  const AuthUser = useAuthUser()

  if(AuthUser.claims.manager) return(
    <ManagerLayout title={`Dashboard - ${AuthUser.displayName}`}>
      <HashNavigationContainerComponent components={[
        {route: "#list", component: <Providers authUser={AuthUser} />}
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