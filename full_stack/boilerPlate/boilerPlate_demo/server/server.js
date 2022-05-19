// 1. Import Dependencies
const express = require('express')
const cors = require("cors")
const app = express()
const port = 8000


// 2. Configure Express
app.use(cors()) // allows for react/express to communicate
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// 4. Run express server
app.listen(port, () => console.log(`EXPRESS SERVER RUNNING ON ${port}`))