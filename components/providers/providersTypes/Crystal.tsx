import type { ProviderInfo, PriceInput} from '../types'
import { useState } from 'react'

// Import components
import HeaderComponent from '../components/Header'
import SubtitlePrimary from '../../../coleopteros/TextComponents/SubtitlePrimary'

export default function Crystal({
  provider,
  setNotification,
  setState,
  state,
  authUser
}: ProviderInfo) {
  const [edit, setEdit] = useState(false)
  const [crystalProvider, setCrystalProvider] = useState(provider)

  return(
    <div style={{
      padding: "1rem"
    }}>
      <HeaderComponent
        providerName={provider.name}
        providerType="Provedor De Cristales"
        edit={edit}
        setEdit={setEdit}
        setNotification={setNotification}
        setState={setState}
        state={state}
        authUser={authUser}
        provider={crystalProvider} />

        <div style={{
          paddingLeft: "2rem",
          margin: "1rem 0"
        }}>
          <SubtitlePrimary text="Cristales" />
          <div>
            <table className="edit-table-table" style={{
              marginTop: "0",
              maxWidth: "500px",
              backgroundColor: "white"
            }}>
              <thead>
                <tr>
                  <th></th>
                  <th>CLARO</th>
                  <th>FILTRASOL</th>
                  <th>REFLECTA AZUL</th>
                  <th>TINTEX</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(crystalProvider.crystal).map((crystal: any, i: number) => {
                  return(
                    <tr key={i} style={{textAlign: "center"}}>
                      <th style={{textAlign: "center"}}>{crystal[0].toLocaleUpperCase()}</th>
                      {Object.entries(crystal[1]).map((type: any, i: number) => {
                        const completeRoute = `${crystal[0]}.${type[0]}`
                        return(
                          <td key={i} style={{width: "100px"}}>{
                            edit ?
                            <PriceInput price={type[1].price} route={completeRoute} edit={edit} state={crystalProvider} setState={setCrystalProvider} /> : 
                            `$ ${type[1].price}`
                          }</td>
                        )
                      })}
                    </tr>
                  )
                })}
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

        newState.crystal[path[0]][path[1]] = newPriceObject
        
        setPrice(e.target.value)
      }
    } />
  )
}