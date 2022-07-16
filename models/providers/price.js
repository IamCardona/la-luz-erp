module.exports = {
  price: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  }
}