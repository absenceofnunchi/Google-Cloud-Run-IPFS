const multiparty = require('multiparty');
var fs = require('fs');
const ipfsClient = require("ipfs-http-client");
const express = require('express')
const app = express()
const port = 8080

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/info', (req, res) => {
  res.send('This is info')
})

app.post('/addImage', (req, res) => {
  var form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {
    const data = fs.readFileSync(files.file[0].path)
    console.log("data", data)

    try {
      const added = await ipfs.add(data)
      console.log("added", added)
      res.status(200).send({ "ipfs success": added})
    } catch (err) {
      console.error(err)
      res.status(500).send({ "ipfs error": error})
    }
    
    fs.unlinkSync(files.file[0].path);
  })
})

app.post('/addFile', (req, res) => {
  var form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {
    const data = fs.readFileSync(Buffer.from(files.file[0].path))
    console.log("data", data)

    try {
      const added = await ipfs.add(data)
      console.log("added", added)
      res.status(200).send({ "ipfs success": added})
    } catch (err) {
      console.error(err)
      res.status(500).send({ "ipfs error": error})
    }
    
    fs.unlinkSync(files.file[0].path);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


