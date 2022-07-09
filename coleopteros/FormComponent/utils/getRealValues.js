import getRealOptionValue from './getRealOptionValue'

export default function getRealValues(values, elements) {
  // Declare information values variable
  const informationValues = {}

  // Fill the information variable
  elements.map(element => {
    if(element.type === "HTMLElement") return

    element.fields.map(field => {
      informationValues[field.name] = {
        required: field.required,
        type: field.type,
        min: field.min,
        max: field.max,
        label: field.label
      }
    })
  })

  // get values keys
  const keys = Object.keys(values)

  // Declare new values to return
  const newValues = {}

  // 
  for(let i = 0; i < keys.length; i++) {
    let value;

    // Get real value for option values
    if(typeof(values[keys[i]]) === 'object') {
      value = getRealOptionValue(values[keys[i]])
    } else if(informationValues[keys[i]].type === "number") {
      value = Number(values[keys[i]])

      // Verify the min
      if(value < informationValues[keys[i]].min) {
        throw new Error(`El valor mínimo para ${informationValues[keys[i]].label} es de ${informationValues[keys[i]].min}`)
      }

      if(value > informationValues[keys[i]].max) {
        throw new Error(`El valor máximo para ${informationValues[keys[i]].label} es de ${informationValues[keys[i]].max}`)
      }

    } else {
      value = values[keys[i]]
    }

    // Get real values
    newValues[keys[i]] = value

    // If any value required is empy return
    if(informationValues[keys[i]].required && !value) {
      throw new Error("Asegúrate de llenar todos los campos antes de enviar el formulario.")
    }
  }

  return newValues
}