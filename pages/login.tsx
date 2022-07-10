import { useState } from 'react'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import firebase from 'firebase/app'

// Import components
import UnauthenticatedLayout from "../components/layouts/UnauthenticatedLayout"
import CardContainer from "../coleopteros/ContainerComponents/CardContainer"
import FormComponent from "../coleopteros/FormComponent"
import Image from "next/image"
import Loader from "../coleopteros/UtilComponents/Loader"
import TextPrimary1 from '../coleopteros/TextComponents/TextPrimary1'
import Link from 'next/link'
import TagComponent from '../coleopteros/TagComponent/Tag'

// Import icons
import { FaUserAlt, FaKey } from 'react-icons/fa'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(values: any) {
    setLoading(true)
    firebase.auth().signInWithEmailAndPassword(values["email"], values["password"])
    .catch(() => {
      setError("Su correo electrónico o contraseña son incorrectos")
    })
    setLoading(false)
  }

  return(
    <UnauthenticatedLayout title="Iniciar Sesión">
      <div className="center-child full-x-y" style={{position: "relative", margin: "2rem 0"}}>
        {loading && <Loader />}
        <CardContainer width="400px" padding="1rem">
          <FormComponent
            elements={[
              // Logo
              {
                type: "HTMLElement",
                element: (
                  <Image 
                    src="/logo.svg"
                    alt="Vidrieria Y Cancelería - La Luz"
                    width={200}
                    height={150}
                    className="no-select" />
                ),
                aling: "center"
              },
              // Error
              {
                type: "HTMLElement",
                element: (
                  error && (
                    <div style={{width: "100%", marginBottom: "1rem"}}>
                      <TagComponent text={error} spesific_style="warning" action={() => setError("")} />
                    </div>
                  )
                ),
                aling: "center"
              },
              // Row for Email
              {
                type: "row-of-fields",
                fields: [{type: "text", name: "email", label: "Correo electronico", required: true, icon: <FaUserAlt />}],
                aling: "center"
              },
              // Row for Password
              {
                type: "row-of-fields",
                fields: [{type: "password", name: "password", label: "Contraseña", required: true, icon: <FaKey />}],
                aling: "center"
              },
            ]}
            update={false}
            button={{
              text: "Iniciar sesión",
              type: "primary",
              width: "80%"
            }}
            action={(values) => {
              handleSubmit(values)
            }}
          />
          <Link href="/forgot-password">
            <a style={{marginTop: "-1rem", display: "block"}}>
              <TextPrimary1 text="¿Olvidaste tu contraseña?" align="center" />
            </a>
          </Link>
        </CardContainer>
      </div>
    </UnauthenticatedLayout>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: Loader,
  appPageURL: '/dashboard'
})(Login)