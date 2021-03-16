const multiparty = require('multiparty');
const util = require('util');
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

app.post('/add', (req, res) => {
  var form = new multiparty.Form();

  form.parse(req, async function(err, fields, files) {
    const data = fs.readFileSync(files.file[0].path)
    // const data = await fs.promises.readFile(files.file[0].path);
    // console.log("data", data)
    // ipfs.add(data, (error, result) => {
    //   functions.logger.log("ipfs result", result);
    //   console.log("result", result);
    //   // Check If error
    //   if (error) {
    //       functions.logger.log("error", error);
    //       console.log("error", error)
    //       res.status(500).send({ "ipfs error": error})
    //   }

    // });

    try {
      const added = await ipfs.add(data)
      console.log("added", added)
      res.status(200).send({ "ipfs success": added})
    } catch (err) {
      console.error(err)
      res.status(500).send({ "ipfs error": error})
    }
    
    fs.unlinkSync(data);
    // res.status(200).send({ "message": "hello"})
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


