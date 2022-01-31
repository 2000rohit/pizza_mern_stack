const mongoose = require('mongoose')
const dotenv = require('dotenv')
const products = require('./data/pizzaData.json')
const Product = require('./models/customerModel')
dotenv.config()

mongoose.connect(process.env.MONGO_URI)

const importData = async () => {
  try {
    //Mongo ka cmd hai for delete all
    await Product.deleteMany()

    //Ab neeche mongo cmd se import data into models DB

    const sampleProducts = products.map((product) => {
      return { ...product }
    })
    await Product.insertMany(sampleProducts)
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    //Mongo ka cmd hai for delete all

    await Product.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

//neeche if cond "agar tu package.json -> "data:destroy": "node backend/seeder -d" => ye "-d" args delh kar wo function call karega"
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
