import type { NextPage } from 'next'

// Import component
import UnauthenticatedLayout from '../components/layouts/UnauthenticatedLayout'
import Image from 'next/image'
import TextPrimary2 from '../coleopteros/TextComponents/TextPrimary2'

const Home: NextPage = () => {
  return (
    <UnauthenticatedLayout title="Vidriería y Cancelería La Luz - ERP">
      <div className="center-child full-x-y">
        <div>
          <Image src="/logo.svg" alt="Vidrieria Y Cancelería - La Luz" width={200} height={100} />
          <TextPrimary2 text="La Luz ERP 0.0.1 LTS" align="center" />
        </div>
      </div>
    </UnauthenticatedLayout>
  )
}

export default Home