import mongoose from 'mongoose'
import price from './price'

const profileColors = {
  natural: price,
  blanco: price,
  negro: price,
  g2: price,
  bronce: price,
  champañe: price,
  nogal: price,
  cerezo: price,
  "natural brillante": price,
}

const profiles = {
  jamba: profileColors,
  riel: profileColors,
  cerco: profileColors,
  traslape: profileColors,
  cabezal: profileColors,
  zoclo: profileColors,
}

const AluminumProvider = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    uppercase: true
  },
  provider: {
    required: true,
    type: String,
    default: "Aluminum",
    unique: true
  },
  profiles: {
    national: {
      "2 pulgadas": profiles,
      "3 pulgadas": profiles,
    },
    eurovent: {
      "serie 70": profiles,
    }
  }
})

export default mongoose.models.AluminumProvider || mongoose.model('AluminumProvider', AluminumProvider)