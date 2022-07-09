/**
 * 
 * Lasted update: 27 june 2022
 * By: Iam Cardona Mejia
 * 
 */

import FieldComponent from './Field'

export default function TextFieldComponent({field, state, setState, itemsNum}) {
  return(
    <FieldComponent field={field} itemsNum={itemsNum}>
      <input
        className="form-component-generic-styles-for-inputs"
        autoComplete="off"
        required={field.required}
        type={field.type}
        name={field.name}
        placeholder={field.label}
        value={state[field.name]}
        onChange={e => setState({...state, [field.name]: field.action ? field.action(e.target.value) : e.target.value })}
        style={{
          borderTopLeftRadius: field.icon ? "0px" : "4px",
          borderBottomLeftRadius: field.icon ? "0px" : "4px",
        }}
      />
    </FieldComponent>
  )
}