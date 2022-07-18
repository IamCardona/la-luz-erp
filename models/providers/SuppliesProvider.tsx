import mongoose from 'mongoose'
import price from './price'

const SuppliesProvider = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    uppercase: true
  },
  provider: {
    required: true,
    type: String,
    default: "SUMINISTROS"
  },
  supplies: {
    felpa: price,
    vinil: price,
    tornillo: price,
    agarradera: price,
    carril: price,
    escuadra: price,
    taquete: price,
    sellador: price
  }
})

export default mongoose.models.SuppliesProvider || mongoose.model('SuppliesProvider', SuppliesProvider)