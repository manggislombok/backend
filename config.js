module.exports = {
  PORT: 8080,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/manggislombok',
  MONGODB_OPT: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  HARVEST_TYPE: ['KANGKUNG', 'MANGGIS'],
  HARVEST_UNIT: ['ikat', 'kg']
}
