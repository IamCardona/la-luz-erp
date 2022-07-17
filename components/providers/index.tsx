import type { Providers } from "./types"
import { useRouter } from "next/router"

// Import components
import ViewTableComponent from "../../coleopteros/TableComponents/ViewTable"
import TitleComponent from "../../coleopteros/TextComponents/Title"
import PrimaryButtonComponent from "../../coleopteros/ButtonComponents/PrimaryButton"

// Import icons
import { FaTools } from 'react-icons/fa'

export default function ProvidersComponent(Providers: Providers) {
  const router = useRouter()

  return(
    <>
      <div style={{
        padding: "2rem"
      }}>
        
        <div style={{
          margin: "0 auto",
          maxWidth: "1000px"
        }}>
          <TitleComponent text="Provedores" align="center" />

          <div style={{
            margin: "2rem 0"
          }}>
            <PrimaryButtonComponent
            text="Agregar un nuevo provedor"
            typeAction="button"
            style="primary"
            action={() => router.push("#add")} />
          </div>

          <ViewTableComponent
            title="Lista de provedores"
            icon={<FaTools />}
            data={Providers.state.providers}
            headings={["Identificador", "Nombre", "Ramo"]}
            refs={["_id", "name", "bouquet"]}
            href="#get"
            hrefIds={["_id"]} />
        </div>
      </div>
    </>
  )
}