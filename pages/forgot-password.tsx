import { NextPage } from "next";

// Import components
import UnauthenticatedLayout from "../components/layouts/UnauthenticatedLayout";
import CardContainer from "../coleopteros/ContainerComponents/CardContainer";
import Image from "next/image";
import SubtitlePrimary from "../coleopteros/TextComponents/SubtitlePrimary";
import FormComponent from "../coleopteros/FormComponent";

// Import icons
import { FaUserAlt } from 'react-icons/fa'

const ForgotPassword: NextPage = () => {

  function handleSubmit(values: any) {
    console.log(values)
  }

  return(
    <UnauthenticatedLayout title="Recuperar Contraseña">
      <div className="center-child full-x-y">
        <CardContainer>
          <div className="center-me">
            <Image 
              src="/logo.svg"
              alt="Vidrieria Y Cancelería - La Luz"
              width={200}
              height={150} />
          </div>
          <div style={{padding: "1rem"}}>
            <SubtitlePrimary text="Recuperación de contraseña" align="center" />
          </div>
          <FormComponent
            action={values => handleSubmit(values)}
            update={false}
            button={{
              text: "Enviar correo",
              type: "primary",
              width: "80%"
            }}
            elements={[
              {
                type: "row-of-fields",
                fields: [
                  {
                    type: "text",
                    name: "email",
                    label: "Correo electronico",
                    required: true,
                    icon: <FaUserAlt />
                  }
                ]
              }
            ]}
          />
        </CardContainer>
      </div>
    </UnauthenticatedLayout>
  )
}

export default ForgotPassword