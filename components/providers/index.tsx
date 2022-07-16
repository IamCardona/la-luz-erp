import type { Providers } from "./types"

// Import components
import ViewTableComponent from "../../coleopteros/TableComponents/ViewTable"

// Import icons
import { FaTools } from 'react-icons/fa'

export default function ProvidersComponent(Providers: Providers) {
  const data = [
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Belen Perez Ordaz", email: "karla.belen@gmail.com", number: "4272734234"},
    {name: "Fanny Cardona Mejía", email: "fanny.cardona@gmail.com", number: "6523232423"},
    {name: "Porfirio Cardona Abarca", email: "porfirio.cardona@gmail.com", number: "986423321"},
    {name: "Natividad Mejia Gonzales", email: "natividad.mejia@gmail.com", number: "12121212112"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
    {name: "Iam Cardona Mejia", email: "iam.cardona@gmail.com", number: "7441763002"},
  ]
  const headings = ["Nombre", "Email", "Número"]
  const refs = ["name", "email", "number"]

  return(
    <>
      <div style={{
        padding: "2rem"
      }}>
        <ViewTableComponent
          title="Lista de provedores"
          icon={<FaTools />}
          data={data}
          headings={headings}
          refs={refs}
          href="#"
          hrefIds={["email", "number"]} />
      </div>
    </>
  )
}