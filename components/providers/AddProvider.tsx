import type { Providers } from './types'

// Import components
import TopDecoration from '../../coleopteros/OrnamentComponents/TopDecoration'

export default function AddProvider(Providers: Providers) {
  return(
    <div style={{position: "relative"}}>
      <TopDecoration />
      <h1>Add provider</h1>
    </div>
  )
}