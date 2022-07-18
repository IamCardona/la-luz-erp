export default function getItemFromArray(array: any[], param: string, value: string): any {
  let item = null

  array.forEach(i => {
    if(i[param] === value) item = i
  })

  return item
}