import { Layout } from './types';
import Head from 'next/head'

// Import components
import FullNavigationComponent from "../../coleopteros/NavigationComponents/FullNavigation";
import FooterEscarac from '../../coleopteros/UtilComponents/FooterEscarac';

// Import icons
import { SiAuth0 } from 'react-icons/si'

export default function UnauthenticatedLayout(Layout: Layout) {
  return (
    <>
      <Head>
        <title>{Layout.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vidriería y Cancelería La Luz - ERP" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8"/>
        <meta name="keywords" content="Vidrieria, Cancelería, ERP"/>
        <meta name="author" content="escarac.com" />
      </Head>
      <FullNavigationComponent appName="La Luz ERP" sidebarNavigation={[
        // Dynamic Link
        {
          dymamicLinks: [
            {href: "/", title: "Inicio"}
          ],
          child: false
        },
        // Sidebar title
        {
          icon: <SiAuth0 />, text: "Identificate"
        },
        // Dynamic Link
        {
          dymamicLinks: [
            {href: "/login", title: "Iniciar sesión"},
            {href: "/forgot-password", title: "Recuperar contraseña"}
          ],
          child: true
        },
      ]}>
        <div style={{minHeight: "calc(100vh - (2rem + 32px))"}}>
          {Layout.children}
        </div>
        <FooterEscarac />
      </FullNavigationComponent>
    </>
  )
}