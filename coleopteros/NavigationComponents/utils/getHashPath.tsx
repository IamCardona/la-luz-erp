export default function getHashPath(fullPath: string): string {
  let hashPath = ""

  const arrayFromFullPath = Array.from(fullPath)
  let hash = false

  arrayFromFullPath.map(letter => {
    if(letter == "#") hash = true
    if(hash) hashPath = hashPath + letter
  })

  return hashPath
}