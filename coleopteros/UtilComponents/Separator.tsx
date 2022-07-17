export default function Separator(Separator: Separator) {
  return(
    <div style={{
      height: Separator.height
    }}>
    </div>
  )
}

interface Separator {
  height: string
}