// 1. Import Dependencies
const express = require('express')
const cors = require("cors")
const app = express()
const port = 8000

// 1.5 Config your mongoose
require("./config/mongoose.config")

// 2. Configure Express
app.use(cors()) // allows for react/express to communicate
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// 3. Attach routes to express server
const productRoutes = require("./routes/product.routes")
productRoutes(app)

// 4. Run express server
app.listen(port, () => console.log(`EXPRESS SERVER RUNNING ON ${port}`))