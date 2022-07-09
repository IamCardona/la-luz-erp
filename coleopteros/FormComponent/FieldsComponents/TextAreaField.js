/**
 * 
 * Lasted update: 28 june 2022
 * By: Iam Cardona Mejia
 * 
 */

import FieldComponent from "./Field"

export default function TextAreaField({field, state, setState, itemsNum}) {
  return(
    <FieldComponent field={field} itemsNum={itemsNum}>
      <textarea
        className="form-component-generic-styles-for-inputs"
        autoComplete="off"
        required={field.required}
        type={field.type}
        name={field.name}
        placeholder={field.label}
        value={state[field.name]}
        maxLength={field.maxLength}
        onChange={e => setState({...state, [field.name]: field.action ? field.action(e.target.value) : e.target.value })}
        style={{
          borderTopLeftRadius: field.icon ? "0px" : "4px",
          borderBottomLeftRadius: field.icon ? "0px" : "4px",
          height: field.height
        }}
      />
    </FieldComponent>
  )
}