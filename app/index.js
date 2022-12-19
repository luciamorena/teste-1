const app = require('express')()
const port = process.env.PORT || 3000
const os = require('os')
const cors = require('cors')

app.use(cors())

app.get('/',(req,res) => {
    res.status(200).json({
        msg:'API 1.0.0',
        os:os.hostname(),
        hora:new Date().toLocaleTimeString()
    })
})

app.listen(port,() => console.log(`SERVER ONLINE - ${port}`))