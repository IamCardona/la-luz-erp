export default function getRole(claims: any): string {
  const roles = [
    "manager"
  ]

  let role = ""

  roles.forEach(item => {
    if(claims[item]) role = item
  })

  return role === "" ? "Unauthorized" : role
}