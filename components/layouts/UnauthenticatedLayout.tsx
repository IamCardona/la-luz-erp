import { Layout } from './types';
import Head from 'next/head'

// Import components
import FullNavigationComponent from "../../coleopteros/NavigationComponents/FullNavigation";

// Import icons
import { SiAuth0 } from 'react-icons/si'

export default function UnauthenticatedLayout(Layout: Layout) {
  return (
    <>
      <Head>
        <title>Vidriería y Cancelería La Luz - ERP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vidriería y Cancelería La Luz - ERP" />
      </Head>
      <FullNavigationComponent appName="La Luz ERP" sidebarNavigation={[
        // Dynamic Link
        {
          dymamicLinks: [{href: "/", title: "Inicio"}],
          child: false
        },
        // Sidebar title
        {
          icon: <SiAuth0 />, text: "Identificate"
        },
        // Dynamic Link
        {
          dymamicLinks: [{href: "/login", title: "Iniciar sesión"}],
          child: true
        },
      ]}>
        {Layout.children}
      </FullNavigationComponent>
    </>
  )
}