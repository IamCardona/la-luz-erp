export default function getObjectValuesFromFields(Form) {
  const objectValues = {}

  Form.elements.map((row) => {
    
    if(row.type === "HTMLElement") return

    row.fields.map(field => {
      if(Form.update) {
        if(field.type === "option") return objectValues[field.name] =  {
          optionSelected: field.options.includes(field.value) ? field.value : "other",
          otherValue: (field.specifyOption && !field.options.includes(field.value)) ? field.value : "",
          specifyOption: field.specifyOption
        }
  
        return objectValues[field.name] = `${field.value}`
      }

      if(field.type === "option") return objectValues[field.name] =  {
        optionSelected: field.defaultOption,
        otherValue: "",
        specifyOption: field.specifyOption
      }

      return objectValues[field.name] =  ""
    })
  })

  return objectValues
}