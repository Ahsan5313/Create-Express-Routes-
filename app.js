require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const app = express()

const PORT = process.env.PORT || 8080


const router = express.Router()



// app.use(morgan('dev'))


router.get("/login" , (req, res) =>{

    res.send('<h1>I am login form</h1>')
})
router.get("/signup", (req, res) =>{

    res.send("<h1>I am sign up form</h1>")
})

router.get("/logout", (req, res) =>{

    res.send("<h1>I am logout form</h1>")
})

app.use("/user", router)




app.get("/", (req, res) =>{

    res.send("<h1>Hello shibu</h1>")
})

app.get("*", (req, res) =>{

    res.send('<h1>404 Page Not Found !</h1>')
})

app.listen(PORT, () =>{

    console.log(`Server is running at http://localhost:${PORT}`)
})