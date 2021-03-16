// const multiparty = require('multiparty');
// const util = require('util');
// var fs = require('fs');
// const ipfsClient = require("ipfs-http-client");
// const express = require('express')
// const app = express()
// const port = 8080

// app.use(
//   express.urlencoded({
//     extended: true
//   })
// )
// app.use(express.json())

// // const ipfs = ipfsClient({
// //   host: "ipfs.infura.io",
// //   port: 5001,
// //   protocol: "https",
// // });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/info', (req, res) => {
//   res.send('This is info')
// })

// app.post('/add', (req, res) => {
//   var form = new multiparty.Form();

//   form.parse(req, function(err, fields, files) {
//     console.log("util inspect: ", util.inspect({ fields: fields, files: files }))
//     const data = fs.readFileSync(files.file[0].path)
//     ipfs.add(data, (error, result) => {
//       functions.logger.log("ipfs result", result);
//       console.log("result", result);
//       // Check If error
//       if (error) {
//           functions.logger.log("error", error);
//           console.log("error", error)
//           res.status(500).send({ "ipfs error": error})
//       }
//       fs.unlinkSync(tempFilePath);
//       res.status(200).send({ "ipfs success": result})
//     });

//     res.status(200).send({ "message": "hello"})
//     // res.writeHead(200, { 'content-type': 'text/plain' });
//     // res.write('received upload:\n\n');
//     // res.end(util.inspect({ fields: fields, files: files }));
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// // if (req.url === '/add' && req.method === 'POST') {
// //   // parse a file upload
// //   var form = new multiparty.Form();

// //   form.parse(req, function(err, fields, files) {
// //     console.log(`fieldsssss: ${fields}`)
// //     console.log(`filesssss: ${files}`)
// //     res.writeHead(200, { 'content-type': 'text/plain' });
// //     res.write('received upload:\n\n');
// //     res.end(util.inspect({ fields: fields, files: files }));
// //   });

// //   return;
// // }

// // // show a file upload form
// // res.writeHead(200, { 'content-type': 'text/html' });
// // res.end(
// //   '<form action="/upload" enctype="multipart/form-data" method="post">'+
// //   '<input type="text" name="title"><br>'+
// //   '<input type="file" name="upload" multiple="multiple"><br>'+
// //   '<input type="submit" value="Upload">'+
// //   '</form>'
// // );



// // const files = {
// //   "file": [
// //     {
// //       "fieldName":"file",
// //       "originalFilename":"file",
// //       "path":"/tmp/RY5CbG8Kk9APyXTBbtlyGen4",
// //       "headers":{
// //         "content-disposition":"form-data; name=\"file\"; filename=\"file\"","content-type":"image/*"
// //       },
// //       "size":1544169
// //     }
// //   ]
// // }