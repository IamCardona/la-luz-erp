import { useAuthUser, withAuthUser, AuthAction, withAuthUserTokenSSR } from 'next-firebase-auth'
import { useState, useEffect } from 'react'
import axios from 'axios'
import authorizedUsersFrontEnd from '../../utils/authorizedUsersFrontEnd'

// Import layouts
import ManagerLayout from '../../components/layouts/ManagerLayout'

// Import components
import Loader from '../../coleopteros/UtilComponents/Loader'
import Providers from '../../components/providers'
import AddProvider from '../../components/providers/AddProvider'
import Provider from '../../components/providers/Provider'
import NotificationComponent from '../../coleopteros/NotificationsComponents/Notification'

import HashNavigationContainerComponent from '../../coleopteros/NavigationComponents/HashNavigationContainer'

const ProvidersView = () => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [notification, setNotification] = useState(false)
  const AuthUser = useAuthUser()

  useEffect(() => {
    async function fetchData() {
      const token = await AuthUser.getIdToken()

      const req = await axios({
        method: "GET",
        url: "/api/providers",
        headers: {
          'Authorization': token || 'unauthenticated'
        }
      })

      setState({
        ...state,
        providers: req.data.data
      })
      setLoading(false)
    }

    fetchData()
  }, [])

  if(AuthUser.claims.manager) return(
    <ManagerLayout title={`Dashboard - ${AuthUser.displayName}`}>
      {notification && <NotificationComponent notification={notification} />}
      <HashNavigationContainerComponent components={[
        {route: "#list", component: <Providers authUser={AuthUser} state={state} setState={setState} />},
        {route: "#add", component: <AddProvider authUser={AuthUser} state={state} setState={setState} setLoading={setLoading} setNotification={setNotification} />},
        {route: "#get", component: <Provider authUser={AuthUser} state={state} setState={setState} setLoading={setLoading} setNotification={setNotification} />},
      ]}
      loading={loading}
      error404={<div>404 Not found</div>} />
    </ManagerLayout>
  )

  return <></>
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
  return authorizedUsersFrontEnd(AuthUser, ['manager'])
})

export default withAuthUser({
  whenAuthed: AuthAction.RENDER,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: Loader,
  authPageURL: '/login'
})(ProvidersView)