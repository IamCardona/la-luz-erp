import { useRouter } from 'next/router'
import axios from 'axios'

// Import components
import PrimaryButtonComponent from '../../../coleopteros/ButtonComponents/PrimaryButton'
import Separator from '../../../coleopteros/UtilComponents/Separator'
import TitleComponent from '../../../coleopteros/TextComponents/Title'

// Import icons
import { FaArrowLeft, FaSave } from 'react-icons/fa'
import { AiTwotoneEdit } from 'react-icons/ai'

export default function HeaderComponent({
  providerName,
  providerType,
  edit,
  setEdit,
  setNotification,
  setState,
  state,
  authUser,
  provider
}: Header) {
  const router = useRouter()

  return(
    <div>
      <PrimaryButtonComponent
        text="Ir a lista de provedores"
        typeAction="button"
        style="primary"
        icon={<FaArrowLeft />}
        iconPosition="left"
        action={() => router.push("/dashboard/providers#list")} />

      <Separator height="1rem" />

      {/** Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div>
          <TitleComponent text={providerName} />
          <h2 style={{ color: "black", fontStyle: "italic" }}>{providerType}</h2>
        </div>
        <div>
          {edit ? (
            <>
              <PrimaryButtonComponent
                text="Guardar cambios"
                typeAction="button"
                style="primary"
                color="#09f"
                icon={<FaSave />}
                iconPosition="right"
                action={async () => {
                  setNotification({message: "Espera en lo que se actualizan los datos", setStatus: setNotification})
                  setState({
                    ...state,
                    providers: [
                      ...state.providers.map(p => p._id === provider._id ? state : p)
                    ]
                  })
                  const token = await authUser.getIdToken()
                  const req = await axios({
                    method: "POST",
                    url: "/api/providers/update",
                    headers: {
                      'Authorization': token || 'unauthenticated'
                    },
                    data: {
                      provider: provider
                    }
                  })
                  if(req.data.error) {
                    setNotification({message: "Ocurrio un error al guardar los datos en la base de datos", setStatus: setNotification})
                  } else {
                    setNotification({message: "Los datos se han guardado correctamente en la base de datos", setStatus: setNotification})
                  }

                  setEdit(!edit)
                }} />
            </>
          ) : (
            <>
              <PrimaryButtonComponent
                text="Editar"
                typeAction="button"
                style="primary"
                color="rgb(255, 190, 0)"
                icon={<AiTwotoneEdit />}
                iconPosition="right"
                action={() => setEdit(!edit)} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

interface Header {
  providerName: string,
  providerType: string,
  edit: any,
  setEdit: any,
  setNotification: any,
  setState: any,
  state: any,
  authUser: any,
  provider: any
}