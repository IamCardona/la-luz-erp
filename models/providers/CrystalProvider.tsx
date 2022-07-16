import mongoose from 'mongoose'
import price from './price'

const crystals = {
  claro: price,
  filtrasol: price,
  "reflecta azul": price,
  "tintex": price,
}

const CrystalProvider = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    uppercase: true
  },
  provider: {
    required: true,
    type: String,
    default: "Crystal",
    unique: true
  },
  crystal: {
    "3mm": crystals,
    "4mm": crystals,
    "6mm": crystals,
    "9mm": crystals,
    "10mm": crystals,
    "12mm": crystals,
  }
})

export default mongoose.models.CrystalProvider || mongoose.model('CrystalProvider', CrystalProvider)