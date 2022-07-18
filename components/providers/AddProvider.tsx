import type { Providers } from './types'
import { useRouter } from 'next/router'
import axios from 'axios'

// Import components
import TopDecoration from '../../coleopteros/OrnamentComponents/TopDecoration'
import PrimaryButtonComponent from '../../coleopteros/ButtonComponents/PrimaryButton'
import FormComponent from '../../coleopteros/FormComponent'
import TitleComponent from '../../coleopteros/TextComponents/Title'
import CardContainer from '../../coleopteros/ContainerComponents/CardContainer'
import Separator from '../../coleopteros/UtilComponents/Separator'

// Import icon
import { FaArrowLeft } from 'react-icons/fa'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { TbTournament } from 'react-icons/tb'

export default function AddProvider(Providers: Providers) {
  const router = useRouter()

  async function handleSubmit(values: any) {
    Providers.setLoading(true)

    const token = await Providers.authUser.getIdToken()

    const req = await axios({
      method: "POST",
      url: "/api/providers/add",
      headers: {
        'Authorization': token || 'unauthenticated'
      },
      data: {
        name: values["name"],
        provider: values["provider"]
      }
    })

    Providers.setState({
      ...Providers.state,
      providers: [
        ...Providers.state.providers,
        req.data.provider
      ]
    })

    router.push(`?_id=${req.data.provider._id}#get`)
    Providers.setLoading(false)
  }

  return(
    <div style={{position: "relative"}}>
      <TopDecoration />
      <div style={{
        position: "relative",
        padding: "1rem"
      }}>
        <PrimaryButtonComponent
        text={`Ir al area de provedores`}
        typeAction="button"
        style="primary-bg-white"
        icon={<FaArrowLeft />}
        iconPosition="left"
        action={() => router.push("#list")} />

        <Separator height="2rem" />

        <CardContainer
          width="400px"
          padding="1rem"
          margin="0 auto"
        >
          <FormComponent elements={[
            {
              type: "HTMLElement",
              element: (
                <>
                  <TitleComponent text="Crear un nuevo provedor" align="center" />
                  <Separator height="1rem" />
                </>
              )
            },
            {
              type: "row-of-fields",
              aling: "center",
              fields: [
                {
                  type: "text",
                  name: "name",
                  label: "Nombre",
                  required: true,
                  icon: <MdDriveFileRenameOutline />,
                  action: value => value.toLocaleUpperCase() 
                }
              ]
            },
            {
              type: "row-of-fields",
              aling: "center",
              fields: [
                {
                  type: "option",
                  name: "provider",
                  label: "Ramo",
                  required: true,
                  icon: <TbTournament />,
                  options: ["ALUMINIO", "CRISTAL", "INSUMOS"],
                  otherOption: false,
                  defaultOption: "ALUMINIO",
                  specifyOption: false
                }
              ]
            },
          ]}
          action={handleSubmit}
          update={false}
          button={{
            text: "Crear provedor",
            type: "primary",
            width: "70%"
          }} />
        </CardContainer>
      </div>
    </div>
  )
}