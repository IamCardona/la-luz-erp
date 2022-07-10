import { Layout } from './types';
import Head from 'next/head'

// Import components
import FullNavigationComponent from "../../coleopteros/NavigationComponents/FullNavigation";
import FooterEscarac from '../../coleopteros/UtilComponents/FooterEscarac';

// Import icons
import { FaBoxOpen } from 'react-icons/fa'

export default function ManagerLayout(Layout: Layout) {
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
        // Inicio
        {
          dymamicLinks: [
            {href: "/dashboard", title: "Inicio"}
          ],
          child: false
        },
        // Providers title
        {
          icon: <FaBoxOpen />, text: "Provedores"
        },
        // Dynamic Link
        {
          dymamicLinks: [
            {href: "/dashboard/providers#list", title: "Lista de provedores"},
            {href: "/dashboard/providers#add", title: "Agregar provedor"},
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