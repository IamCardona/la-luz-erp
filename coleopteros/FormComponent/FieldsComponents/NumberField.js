/**
 * 
 * Lasted update: 27 june 2022
 * By: Iam Cardona Mejia
 * 
 */

import FieldComponent from './Field'

export default function NumberField({ field, state, setState, itemsNum }) {
  return(
    <FieldComponent field={field} itemsNum={itemsNum}>
      <input
         className="form-component-generic-styles-for-inputs"
         autoComplete="off"
         required={field.required}
         type={field.type === "number" && "text"}
         name={field.name}
         placeholder={field.label}
         value={state[field.name]}
         onChange={e => {
          if(e.target.value === "-") return setState({...state, [field.name]: "-" })
          if(e.target.value === "0") return
          if(isNaN(e.target.value)) return
          if(!field.floats && !Number.isInteger(Number(e.target.value))) return
          setState({...state, [field.name]: e.target.value.trim() })
        }}
         style={{
           borderTopLeftRadius: field.icon ? "0px" : "4px",
           borderBottomLeftRadius: field.icon ? "0px" : "4px",
         }}
       />
    </FieldComponent>
  )
}