import type { ProviderInfo, Profiles, PriceInput } from '../types'

// Import components
import Separator from "../../../coleopteros/UtilComponents/Separator"
import SubtitlePrimary from "../../../coleopteros/TextComponents/SubtitlePrimary"
import HeaderComponent from "../components/Header"

// Import icons
import { useState } from "react"

export default function AluminumComponent(Aluminum: ProviderInfo) {
  const [profiles, setProfiles] = useState([
    "nacional-2", "nacional-3",
    "eurovent-70"
  ])
  const [edit, setEdit] = useState(false)
  const [state, setState] = useState(Aluminum.provider)
  const [filter, setFilter] = useState("all")
  const [subFilter, setSubfilter] = useState("all")

  const allProfiles = ["nacional-2", "nacional-3", "eurovent-70"]

  return (
    <div style={{padding: "1rem"}}>

      <HeaderComponent
        providerName={state.name}
        providerType="Provedor De Aluminio"
        edit={edit}
        setEdit={setEdit}
        setNotification={Aluminum.setNotification}
        setState={Aluminum.setState}
        state={Aluminum.state}
        authUser={Aluminum.authUser}
        provider={state} />

      <Separator height="1rem" />

      {/** Filters */}
      <select className="form-component-generic-styles-for-inputs" style={{
        width: "200px",
        borderRadius: "4px"
      }}
      value={filter}
      onChange={e => {
        setFilter(e.target.value)
        switch(e.target.value) {
          case "all":
            setProfiles(allProfiles)
            break;
          case "nacional":
            setProfiles(allProfiles.filter(profile => profile.includes("nacional")))
            setSubfilter("all")
            break;
          case "eurovent":
            setProfiles(allProfiles.filter(profile => profile.includes("eurovent")))
            setSubfilter("all")
            break;
        }
      }}>
        <option value="all">Todo</option>
        <option value="nacional">Linea Nacional</option>
        <option value="eurovent">Linea Eurovent</option>
      </select>
      
      {/** Filters */}
      {filter !== "all" && (
        <select className="form-component-generic-styles-for-inputs" style={{
          width: "200px",
          marginLeft: "1rem",
          borderRadius: "4px"
        }}
        value={subFilter}
        onChange={e => {
          setSubfilter(e.target.value)
          if(e.target.value === "all") return setProfiles(allProfiles.filter(profile => profile.includes(filter)))
          setProfiles(allProfiles.filter(profile => profile === e.target.value))
        }}>
          <option value="all">Todo</option>
          {filter.toString().includes("nacional") && (
            <>
              <option value="nacional-2">2 Pulgadas</option>
              <option value="nacional-3">3 Pulgadas</option>
            </>
          )}
          {filter.toString().includes("eurovent") && (
            <>
              <option value="eurovent-70">Serie 70</option>
            </>
          )}
        </select>
      )}

      <Separator height="1rem" />

      {/** Nacional line */}
      {profiles.toString().includes("nacional") && SeparatorWithTitle("Linea Nacional")}

        {/** 2 inches */}
        {profiles.toString().includes("nacional-2") && <ProfileTable setState={setState} profiles={Aluminum.provider.profiles.national["2 pulgadas"]} route="national.2 pulgadas" edit={edit} state={state} />}
        
        {/** 3 inches */}
        {profiles.toString().includes("nacional-3") && <ProfileTable setState={setState} profiles={Aluminum.provider.profiles.national["3 pulgadas"]} route="national.3 pulgadas" edit={edit} state={state} />}

      {/** Eurovent line */}
      {profiles.toString().includes("eurovent") && SeparatorWithTitle("Linea Eurovent")}

          {/** Serie 70 */}
          {profiles.toString().includes("eurovent-70") && <ProfileTable setState={setState} profiles={Aluminum.provider.profiles.eurovent["serie 70"]} route="eurovent.serie 70" edit={edit} state={state} />}


    </div>
  )
}

function ProfileTable(Profiles: Profiles) {
  const profiles = Object.entries(Profiles.profiles)

  return(
    <div style={{
      paddingLeft: "2rem",
      margin: "1rem 0"
    }}>
      <SubtitlePrimary text={Profiles.route.split(".")[1]} />
      <div>
        <table className="edit-table-table" style={{
          marginTop: "0",
          maxWidth: "1000px",
          backgroundColor: "white"
        }}>
          <thead>
            <tr>
              <th></th>
              <th>NATURAL</th>
              <th>BLANCO</th>
              <th>NEGRO</th>
              <th>G2</th>
              <th>BRONCE</th>
              <th>CHAMPAÑE</th>
              <th>NOGAL</th>
              <th>CEREZO</th>
              <th>NATURAL BRILLANTE</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, i) => {
              return(
                <tr key={i}>
                  <th>{profile[0].toLocaleUpperCase()}</th>
                  {Object.entries(profile[1]).map((color, i) => {
                    const completeRoute = `${Profiles.route}.${profile[0]}.${color[0]}`
                    return(
                      <td key={i} style={{width: "100px"}}>{
                        Profiles.edit ?
                        <PriceInput price={color[1].price} route={completeRoute} edit={Profiles.edit} state={Profiles.state} setState={Profiles.setState} /> : 
                        `$ ${color[1].price}`
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

        newState.profiles[path[0]][path[1]][path[2]][path[3]] = newPriceObject
        
        setPrice(e.target.value)
      }
    } />
  )
}

function SeparatorWithTitle(title: string) {
  return(
    <>
      <h1 style={{
        color: "black",
        fontStyle: "italic"
      }}>
        {title}
      </h1>
    </>
  )
}
