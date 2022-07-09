import type { NextPage } from 'next'

// Import component
import UnauthenticatedLayout from '../components/layouts/UnauthenticatedLayout'

const Home: NextPage = () => {
  return (
    <UnauthenticatedLayout>
      <h1>Test component</h1>
    </UnauthenticatedLayout>
  )
}

export default Home
