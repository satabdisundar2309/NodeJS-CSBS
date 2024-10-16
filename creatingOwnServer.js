// creating my own server
const http = require("http"); //this http module handles the request and resonse of server in node js
// http.createServer((req, res)=>{
//     res.write("<h1>Hello this is satabdisundar behera</h1>");
//     res.end();
// }).listen(4500);

const dataControl = (req, res) => {
    console.log(req.url)
  res.write("<h1>Hello this is Satabdisundar Behera</h1>");
  res.end();
};
http.createServer(dataControl).listen(4500);
