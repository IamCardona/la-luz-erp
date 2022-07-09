export default function getRealOptionValue(OptionField) {
  let realValue = ""

  if(OptionField.optionSelected === "other") {
    if(OptionField.specifyOption) {
      realValue = OptionField.otherValue
    } else {
      realValue = "Otro"
    }
  } else {
    realValue = OptionField.optionSelected
  }

  return realValue
}