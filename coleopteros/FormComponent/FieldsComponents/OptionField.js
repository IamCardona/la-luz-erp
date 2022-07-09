/**
 * 
 * Lasted update: 28 june 2022
 * By: Iam Cardona Mejia
 * 
 */

import FieldComponent from "./Field"

export default function OptionField({field, state, setState, itemsNum}) {
  return(
    <FieldComponent field={field} itemsNum={itemsNum}>
      <>
        <select
          className="form-component-generic-styles-for-inputs"
          required={field.required}
          name={field.name}
          value={state[field.name].optionSelected}
          onChange={e => {
            if(field.onChanceHanlder) field.onChanceHanlder(e.target.value)
            setState({...state, [field.name]: {
              ...state[field.name],
              optionSelected: e.target.value 
            }})
          }}
          style={{
            borderTopLeftRadius: field.icon ? "0px" : "4px",
            borderBottomLeftRadius: field.icon ? "0px" : "4px",
          }}
        >
          {field.options.map((option, i) => {
            return(
              <option value={option} key={i}>{option}</option>
            )
          })}
          {field.otherOption && <option value="other">Otro</option>}
        </select>
        {(state[field.name].optionSelected === "other" && state[field.name].specifyOption) && (
          <FieldComponent field={{label: "Especifica"}} itemsNum={1}>
            <input
              className="form-component-generic-styles-for-inputs"
              autoComplete="off"
              required={field.required}
              type="text"
              name={field.name}
              placeholder="Especifica"
              value={state[field.name].otherValue}
              onChange={e => setState({...state, [field.name]: {
                ...state[field.name],
                otherValue: e.target.value
              }})}
              style={{
                borderTopLeftRadius: field.icon ? "0px" : "4px",
                borderBottomLeftRadius: field.icon ? "0px" : "4px",
              }}
            />
          </FieldComponent>
        )}
      </>
    </FieldComponent>
  )
}