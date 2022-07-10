import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth'
import Loader from '../../coleopteros/UtilComponents/Loader';

// Import layouts
import ManagerLayout from '../../components/layouts/ManagerLayout';

// Import dashboards
import ManagerDashboard from '../../components/dashboards/ManagerDashboard';

const Dashboard = () => {
  const AuthUser = useAuthUser()

  if(AuthUser.claims.manager) return(
    <ManagerLayout title={`Dashboard - ${AuthUser.displayName}`}>
      <ManagerDashboard authUser={AuthUser} />
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
})(Dashboard)