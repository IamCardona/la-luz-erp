import type { ProviderInfo, PriceInput} from '../types'
import { useState } from 'react'

// Import components
import HeaderComponent from '../components/Header'
import SubtitlePrimary from '../../../coleopteros/TextComponents/SubtitlePrimary'

export default function Supplies({
  provider,
  setNotification,
  setState,
  state,
  authUser
}: ProviderInfo) {
  const [edit, setEdit] = useState(false)
  const [suppliesProvider, setSuppliesProvider] = useState(provider)

  return(
    <div style={{
      padding: "1rem"
    }}>
      <HeaderComponent
        providerName={provider.name}
        providerType="Provedor De Suministros"
        edit={edit}
        setEdit={setEdit}
        setNotification={setNotification}
        setState={setState}
        state={state}
        authUser={authUser}
        provider={suppliesProvider} />

        <div style={{
          paddingLeft: "2rem",
          margin: "1rem 0"
        }}>
          <SubtitlePrimary text="Cristales" />
          <div>
            <table className="edit-table-table" style={{
              marginTop: "0",
              maxWidth: "900px",
              backgroundColor: "white"
            }}>
              <thead>
                <tr>
                  <th></th>
                  <th>FELPA</th>
                  <th>VINIL</th>
                  <th>TORNILLO</th>
                  <th>AGARRADERA</th>
                  <th>CARRIL</th>
                  <th>ESCUADRA</th>
                  <th>TAQUETE</th>
                  <th>SELLADOR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{textAlign: "center"}}>Precio</th>
                  {Object.entries(suppliesProvider.supplies).map((supply: any, i: number) => {
                    const completeRoute = `${supply[0]}`
                    return(
                      <td key={i} style={{width: "100px"}}>{
                        edit ?
                        <PriceInput price={supply[1].price} route={completeRoute} edit={edit} state={suppliesProvider} setState={setSuppliesProvider} /> : 
                        `$ ${supply[1].price}`
                      }</td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

function PriceInput(PriceInput: PriceInput) {
  const [price, setPrice] = useState(PriceInput.price)
  const path = PriceInput.route.split(".")
  
  return(
    <input
      value={price}
      required={true}
      className="form-component-generic-styles-for-inputs"
      style={{
        borderRadius: "4px",
        height: "32px"
      }}
      onChange={e => {
        if(e.target.value === "-") return setPrice("-")
        if(e.target.value === "0") return
        /// WHATTTT!!!! 
        if(isNaN(e.target.value)) return

        const newPriceObject = {
          price: Number(e.target.value),
          date: Date.now()
        }

        let newState = PriceInput.state

        newState.supplies[path[0]] = newPriceObject
        
        setPrice(e.target.value)
      }
    } />
  )
}