// Import types
import { FormEvent } from 'react'
import { Form } from './types'

// Import utils
import { useState } from 'react'
import getObjectValuesFromFields from './utils/getObjectValuesFromFields'
import getRealValues from './utils/getRealValues'

// Import fields components
import NumberFieldComponent from './FieldsComponents/NumberField.js'
import OptionFieldComponent from './FieldsComponents/OptionField.js'
import TextAreaFieldComponent from './FieldsComponents/TextAreaField.js'
import TextFieldComponent from './FieldsComponents/TextField.js'
import FileFieldComponent from './FieldsComponents/FileField'
import TagComponent from '../TagComponent/Tag'
import PrimaryButtonComponent from '../ButtonComponents/PrimaryButton'

export default function FormComponent(Form: Form) {
  /** "values" will contain the values of all fields */
  const [values, setValues] = useState(getObjectValuesFromFields(Form))
  const [error, setError] = useState("")

  return(
    <form onSubmit={(e: FormEvent) => {
      e.preventDefault()
      setError("")

      try {
        // Verify all fields are completed
        const realValues =  getRealValues(values, Form.elements)

        Form.action(realValues)
      } catch(error: any) {
        setError(error.message)
      }

    }} className="container-form-component">
      <div>
        {/** Render elements */}
        {Form.elements.map((element, i) => { 
          /** If element is a row, render row component */
          if(element.type === "row-of-fields") {
            if(!element.fields) return
            return(
              <div key={i} className="form-component-row-of-fields" style={{
                justifyContent: element.aling,
              }}>
                {element.fields.map((field, i) => {
                  if(field.type === "password") return <TextFieldComponent key={i} field={field} state={values} setState={setValues} itemsNum={element.fields && element.fields.length} />
                  if(field.type === "text") return <TextFieldComponent key={i} field={field} state={values} setState={setValues} itemsNum={element.fields && element.fields.length} />
                  if(field.type === "number") return <NumberFieldComponent key={i} field={field} state={values} setState={setValues} itemsNum={element.fields && element.fields.length} />
                  if(field.type === "textarea") return <TextAreaFieldComponent key={i} field={field} state={values} setState={setValues} itemsNum={element.fields && element.fields.length} />
                  if(field.type === "option") return <OptionFieldComponent key={i} field={field} state={values} setState={setValues} itemsNum={element.fields && element.fields.length} />
                  if(field.type === "file") return <FileFieldComponent key={i} field={field} state={values} setState={setValues} itemsNum={element.fields && element.fields.length} />
                })}
              </div>
            )
          } else {
            /** If element is a ReactNode, render element */
            return <div key={i} style={{
              display: element.aling && "flex",
              justifyContent: element.aling && element.aling,
            }}>{element.element}</div>
          }
        })}
      </div>

      {/** Error tag */}
      {error && (
        <div style={{margin: "1rem"}}>
          <TagComponent text={error} action={() => setError("")} spesific_style="warning" />
        </div>
      )}

      {/** Subit button */}
      <div className="util-css-classes-center-childs" style={{
        margin: "2rem"
      }}>
        <PrimaryButtonComponent text={Form.button.text} typeAction="submit" width={Form.button.width} style={Form.button.type} />
      </div>
    </form>
  )
}